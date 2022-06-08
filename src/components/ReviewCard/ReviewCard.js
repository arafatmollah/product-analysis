import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./Reviewcard.css"

const ReviewCard = (props) => {
    console.log(props.reviews)
    const {name, describe}=props.reviews;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Reviews</Card.Subtitle>
    <Card.Text>
      {describe}
    </Card.Text>
    <FontAwesomeIcon className="icon" icon={faStar} />
    <FontAwesomeIcon className="icon" icon={faStar} />
    <FontAwesomeIcon className="icon" icon={faStar} />
    <FontAwesomeIcon className="icon" icon={faStar} />
    <FontAwesomeIcon className="icon" icon={faStar} />
  </Card.Body>
</Card>
        </div>
    );
};

export default ReviewCard;