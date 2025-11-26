import React from 'react';

import {connect} from 'react-redux';

const PostDetails = props => {
    return (
        <div>
            <div>
                <p>Leave message</p>
            </div>
            <div style={{display: "flex", direction:"rtl"}}>
                <div style={{
                    color: "white", padding: "5px",
                    marginTop: "-30px", marginBottom: "10px",
                    backgroundColor: "#00000066",
                    borderRadius: "5px"
                }}>
                    <div>
                    <p style={{marginBottom: "0px"}}>Amount of messages: {props.resCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect((state) => {
    return {
        resCount: state.amountOfMessages
    };
})(PostDetails);