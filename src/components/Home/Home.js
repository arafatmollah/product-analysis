import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    return (
        <div className='container'>
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
    );
};

export default Home;