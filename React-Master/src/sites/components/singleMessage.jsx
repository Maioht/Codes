import React from 'react';
import {connect} from 'react-redux';
import {deleteNote} from '../../store/actions'

const SingleMessage = props => {
    return (
        <div style={{
            backgroundColor: "#FFFFFF66",
            borderRadius: "10px"
        }}>
            <div style={{display: "flex"}}>
            <h1 style={{paddingLeft: "5px", width: "100%", marginBottom: "0px"}}>{props.message.title}</h1>
            <h1 className="deleteButton" onClick={() => props.deleteMessage(props.message.id)}>X</h1>
            </div>
            
            <hr/>
            <p style={{paddingLeft: "5px"}}>{props.message.content}</p>
        </div>
    );
};

export default connect(null, { deleteMessage: deleteNote })(SingleMessage);