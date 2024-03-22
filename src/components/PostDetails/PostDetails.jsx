import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const navigate = useNavigate();
    const {id, title, body} = postDetails;
    return (
        <div className='flex gap-4 flex-col bg-green-600 rounded-lg my-10 p-7'>
            <h2 className='text-2xl'>Post Details for: {id}</h2>
            <p className='text-xl'>Title: {title}</p>
            <p>Body: {body}</p>
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;