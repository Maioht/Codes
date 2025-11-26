import React, {Component} from 'react';
import {connect} from 'react-redux'

import SingleMessage from './singleMessage';

class Messages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Messages: []
        };
     
        // console.log(props);
    }

    componentWillReceiveProps(props) {
        var newMessages = [];
        // console.log(props);
        props.reservs.forEach(message => {
            newMessages.push(<SingleMessage key={message.id} message={message}/>);
        });

        this.setState({
            Messages: newMessages
        });
        
    }

    render() {
        return (
            <div style={{
                padding: "10%"
            }}>
                <h1>Messages:</h1>
                <div className="Message">
                    {this.state.Messages}
                </div>
            </div>
        );
    }
}


export default connect(state => {
    return {
        reservs: state.Messages
    }   
})(Messages)