import React from 'react';
import { useNavigate,useRouteError  } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    const navigate = useNavigate()
    // console.error(error);
    return (
        <div className='flex flex-col gap-5'>   
            <h1 className='text-4xl'>Opps!! {error.status} {error.statusText || error.message}</h1>
            <p>Sorry, an unexpected error occured.</p>
            <p>
                <small>{error.statusText || error.message}</small>
            </p>
            <button onClick={()=> navigate('/')}>Go Back To Home</button>
        </div>
    );
};

export default NotFound;