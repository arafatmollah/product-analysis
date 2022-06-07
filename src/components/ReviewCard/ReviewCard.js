import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewCard = (props) => {
    console.log(props.reviews)
    const {name}=props.reviews;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Reviews</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    );
};

export default ReviewCard;