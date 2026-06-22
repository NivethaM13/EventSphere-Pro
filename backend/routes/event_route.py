from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.database import get_db
from models.event_model import Event
from schemas.event_schema import EventCreate
from schemas.event_schema import EventUpdate

router = APIRouter()


@router.post("/create-event")
def create_event(
    event: EventCreate,
    db: Session = Depends(get_db)
):
    new_event = Event(
        title=event.title,
        description=event.description,
        venue=event.venue,
        event_date=event.event_date,
        category=event.category,
        organizer_email=event.organizer_email
    )

    db.add(new_event)
    db.commit()
    db.refresh(new_event)

    return {
        "message": "Event Created Successfully"
    }


@router.get("/events")
def get_events(
    db: Session = Depends(get_db)
):
    return db.query(Event).all()

@router.get("/event/{event_id}")
def get_single_event(
    event_id: int,
    db: Session = Depends(get_db)
):
    event = db.query(Event).filter(
        Event.id == event_id
    ).first()

    if not event:
        raise HTTPException(
            status_code=404,
            detail="Event not found"
        )

    return event


@router.delete("/delete-event/{event_id}")
def delete_event(
    event_id: int,
    db: Session = Depends(get_db)
):
    event = db.query(Event).filter(
        Event.id == event_id
    ).first()

    if not event:
        raise HTTPException(
            status_code=404,
            detail="Event not found"
        )

    db.delete(event)
    db.commit()

    return {
        "message": "Event Deleted Successfully"
    }


@router.put("/publish-event/{event_id}")
def publish_event(
    event_id: int,
    db: Session = Depends(get_db)
):
    event = db.query(Event).filter(
        Event.id == event_id
    ).first()

    if not event:
        raise HTTPException(
            status_code=404,
            detail="Event not found"
        )

    event.status = "Published"

    db.commit()

    return {
        "message": "Event Published Successfully"
    }


@router.put("/update-event/{event_id}")
def update_event(
    event_id: int,
    updated_event: EventUpdate,
    db: Session = Depends(get_db)
):
    event = db.query(Event).filter(
        Event.id == event_id
    ).first()

    if not event:
        raise HTTPException(
            status_code=404,
            detail="Event not found"
        )

    event.title = updated_event.title
    event.description = updated_event.description
    event.venue = updated_event.venue
    event.category = updated_event.category

    db.commit()

    return {
        "message": "Event Updated Successfully"
    }

@router.get("/featured-events")
def featured_events(
    db: Session = Depends(get_db)
):
    return db.query(Event).limit(5).all()


@router.get("/trending-events")
def trending_events(
    db: Session = Depends(get_db)
):
    return db.query(Event).limit(5).all()