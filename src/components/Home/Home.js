import React from 'react';
import { Button } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Home.css';
const Home = () => {
    const [review,setReview]=useReviews([])
    return (
        <div className='container'>
            <div className="hero-section">
            <div>
                <h1 className="fs-1 fw-bold">The best coffee Center on your Town <span className='text-success'>Let's try it!</span></h1>
            
            <p>Hello, Make your day more refresh and give your 100% to work by starting your day 
                with our best coffee. Our coffee is based on pure coffe beans that 
                was favourite by most of the person. Our coffee offers you fully authentic 
                and organic. Our main focuse on customer satisfaction.
            </p>
            <Button variant="outline-primary">Taste coffee</Button>
            </div>
            <div className="image">
                <img className='rounded' src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="#"></img>
            </div>
            </div>
            <h1 className="text-success text-center mt-4 fw-bold">See customer Review</h1>
            <div className="reviews">
            {
                    review.map(reviews => <ReviewCard key={reviews.id}
                     reviews={reviews }
                     ></ReviewCard>)
                }
            </div>
            <div className="btn">
            <Button variant="primary">See All review</Button>
        </div>
        
        
    );
};

export default Home;