import React from 'react';
import {Provider} from 'react-redux';

import Template from './components/template';
import Header from './components/Header';
import TeamGallery from './components/teamGallery'

import {store} from '../store';


const OurTeam = (props) => {
    return (
        <Provider store={store}>
            <Header logged={true} />
            <Template />
            <div style={{ position:"absolute", height: "100%", width: "100%" }}>
            <TeamGallery />
            </div>      
        </Provider>
    );
}
export default OurTeam;