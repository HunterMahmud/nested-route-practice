import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>   
            <h1 className='text-4xl'>404 Not Found</h1>
            <br />
            <button onClick={()=> navigate('/')}>Go Back To Home</button>
        </div>
    );
};

export default NotFound;