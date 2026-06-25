from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.database import get_db
from models.user_models import User

from schemas.user_schemes import (
    UserCreate,
    UserLogin,
    UserProfileUpdate,
    ForgotPassword,
    ResetPassword
)

from utils.auth import (
    hash_password,
    verify_password,
    create_access_token,
    is_admin
)

router = APIRouter()


# ==========================
# PROFILE MANAGEMENT
# ==========================

@router.get("/profile/{email}")
def get_profile(
    email: str,
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(
        User.email == email
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return user


@router.put("/profile/{email}")
def update_profile(
    email: str,
    profile: UserProfileUpdate,
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(
        User.email == email
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    user.full_name = profile.full_name
    user.phone = profile.phone
    user.address = profile.address

    db.commit()

    return {
        "message": "Profile Updated Successfully"
    }


# ==========================
# REGISTER
# ==========================

@router.post("/register")
def register_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    new_user = User(
        full_name=user.full_name,
        email=user.email,
        password=hash_password(user.password),
        role=user.role
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User Registered Successfully"
    }


# ==========================
# LOGIN
# ==========================

@router.post("/login")
def login_user(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    db_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid Email"
        )

    if not verify_password(
        user.password,
        db_user.password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid Password"
        )

    token = create_access_token(
        {
            "sub": db_user.email,
            "role": db_user.role
        }
    )

    return {
        "access_token": token,
        "role": db_user.role,
        "token_type": "bearer"
    }


# ==========================
# FORGOT PASSWORD
# ==========================

@router.post("/forgot-password")
def forgot_password(
    data: ForgotPassword,
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(
        User.email == data.email
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="Email not found"
        )

    return {
        "message": "Email verified. You can reset password."
    }


# ==========================
# RESET PASSWORD
# ==========================

@router.post("/reset-password")
def reset_password(
    data: ResetPassword,
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(
        User.email == data.email
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    user.password = hash_password(
        data.new_password
    )

    db.commit()

    return {
        "message": "Password Reset Successfully"
    }
@router.put("/verify-organizer/{email}")
def verify_organizer(
    email: str,
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(
        User.email == email
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="Organizer not found"
        )

    user.is_verified = "Verified"

    db.commit()

    return {
        "message": "Organizer Verified Successfully"
    }


@router.get("/organizers")
def get_all_organizers(
    db: Session = Depends(get_db)
):
    organizers = db.query(User).filter(
        User.role == "Organizer"
    ).all()

    return organizers


@router.get("/organizer-dashboard/{email}")
def organizer_dashboard(
    email: str,
    db: Session = Depends(get_db)
):
    organizer = db.query(User).filter(
        User.email == email,
        User.role == "Organizer"
    ).first()

    if not organizer:
        raise HTTPException(
            status_code=404,
            detail="Organizer not found"
        )

    return {
        "organizer_name": organizer.full_name,
        "email": organizer.email,
        "verification_status": organizer.is_verified,
        "total_events": 0,
        "total_tickets_sold": 0,
        "total_revenue": 0
    }

    return {
        "organizer_name": organizer.full_name,
        "email": organizer.email,
        "verification_status": organizer.is_verified,
        "total_events": 0,
        "total_tickets_sold": 0,
        "total_revenue": 0
    }


@router.get("/users")
def get_all_users(
    db: Session = Depends(get_db)
):
    users = db.query(User).all()
    return users