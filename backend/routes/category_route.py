from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.database import get_db
from models.category_model import Category
from schemas.category_schema import CategoryCreate
from schemas.category_schema import CategoryUpdate

router = APIRouter()


@router.get("/categories")
def get_categories(
    db: Session = Depends(get_db)
):
    return db.query(Category).all()


@router.put("/update-category/{category_id}")
def update_category(
    category_id: int,
    updated_category: CategoryUpdate,
    db: Session = Depends(get_db)
):
    category = db.query(Category).filter(
        Category.id == category_id
    ).first()

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Category not found"
        )

    category.category_name = (
        updated_category.category_name
    )

    db.commit()

    return {
        "message": "Category Updated Successfully"
    }


@router.delete("/delete-category/{category_id}")
def delete_category(
    category_id: int,
    db: Session = Depends(get_db)
):
    category = db.query(Category).filter(
        Category.id == category_id
    ).first()

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Category not found"
        )

    db.delete(category)
    db.commit()

    return {
        "message": "Category Deleted Successfully"
    }