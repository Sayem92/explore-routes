import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();
    const handlerNavigate = () =>{
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Visit: {id}</Link>
           <Link to={`/post/${id}`}> <button>Show Details</button> </Link>

           <button onClick={handlerNavigate}>Show Details 2</button>
        </div>
    );
};

export default Post;