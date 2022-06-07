import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css';
// import ReviewCard from './components/ReviewCard/ReviewCard';

const Reviews = () => {
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReview(data));
    },[])
    return (
        <div>
            <div>
            <h1 className='text-center text-primary'>Customer Review</h1>
            </div>
            <div>
                {
                    review.map(reviews => <ReviewCard key={reviews.id}
                     reviews={reviews }
                     ></ReviewCard>)
                }
            </div>
            <div className="custom">
            <Button varient="primary"><a  href='/'>Customer Reviews</a></Button>
            </div>
        </div>
    );
};

export default Reviews;