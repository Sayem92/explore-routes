import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const PostDetails = useLoaderData();
    const {id, title, body, userId} = PostDetails;

    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(`/friend/${userId}`)
        
    }

    return (
        <div>
            <h2> Details about post : {id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Get the author</button>
        </div>
    );
};

export default PostDetails;