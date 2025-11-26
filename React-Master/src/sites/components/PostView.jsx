import React from 'react';
    
import PostDetails from './PostDetails';
import PostForm from './PostForm';

const PostView = () => {
    return (
        <div style={{
            padding: "10%"
        }}>
            
            <div className="Messages" style={{
                backgroundColor: "#FFFFFF66"
            }}>
                <h1>Leave the message</h1>
                <hr/>
                <PostDetails />
                <PostForm />
            </div>
        </div>
    );
}

export default PostView;