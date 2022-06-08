import React, { useEffect, useState } from 'react';
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
        <div className="container">     
            <div className="reviews">
            {
                    review.map(reviews => <ReviewCard key={reviews.id}
                     reviews={reviews }
                     ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;