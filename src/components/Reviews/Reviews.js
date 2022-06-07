import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Review.css';

const Reviews = () => {
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>console.log(data));
    },[])
    return (
        <div>
            <div>
            <h1 className='text-center text-primary'>Customer Review</h1>
            </div>
            <div className="custom">
            <Button varient="primary"><a  href='/'>Customer Reviews</a></Button>
            </div>
        </div>
    );
};

export default Reviews;