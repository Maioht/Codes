import React from 'react';
import {Provider} from 'react-redux';

import Template from './components/template';
import Header from './components/Header';

import Messages from './components/messages'
import PostView from './components/PostView'

import {store} from '../store';

const UserPanel = (props) => {
    return (
        <Provider store={store}>
            <Header logged={true} />
            <Template />
            <div style={{ position:"absolute", height: "100%", width: "100%" }}>
                <div style={{ width: "50%", height: "100%", float: "left"}}>
                    <Messages />
                </div>
                <div style={{width: "50%", height: "100%", float: "left"}}>
                    <PostView />
                </div>
            </div>
        </Provider>
    );
}

export default UserPanel;