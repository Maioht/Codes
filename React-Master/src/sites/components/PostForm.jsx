import React, {Component} from 'react';

import {connect} from 'react-redux';

import {Button} from 'reactstrap';

import {pushNote} from '../../store/actions';

class PostForm extends Component {
    constructor(props) {
        super(props);
    }

    submitForm = (e) => {
        e.preventDefault();
        let valueDateTime = this.refs.smallmessage.value +" "+ this.datetime();
        this.props.pushNote(this.refs.nickname.value, valueDateTime);
        e.target.reset();
    }
    datetime= () => {
        return new Date().toLocaleString()
      }
    
    
    render() {
        return (
            <form onSubmit={this.submitForm.bind(this)} >
                <h4>Name:</h4>
                <input className="formInput" ref="nickname" style={{width: "60%"}}></input>
                <h4>Leave a message</h4>
                <textarea className="formInput" style={{height:"20vh", width:"100%"}} type="textarea" name="text" ref="smallmessage" />
                <div style={{marginTop: "5%", textAlign: "right"}}>
                    <Button style={{backgroundColor: "#00000066"}}>Send</Button>
                </div>
            </form>
        );
    }
}

export default connect(null, {pushNote})(PostForm)