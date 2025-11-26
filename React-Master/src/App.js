import React, { Component } from 'react';
import './App.css';

import Header from './sites/components/Header';
import HomePage from './sites/Homepage';



class App extends Component {


    render() {
        return (
            <>
                <Header></Header>
                <HomePage></HomePage>
            </>
        );
    }
}

export default App;
