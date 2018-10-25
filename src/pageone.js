import React, { Component } from 'react';
import './App.css'
import { Button } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Prompt
} from 'react-router-dom';

export default class pageOne extends React.Component{
    render(){
        return (
            <div>        
                <div>Page one
                <Prompt
                    when={true}
                    message={location => (
                        `Are you sure you want to go to ${location.pathname}`
                    )}
                />
                </div>
                <Button type="danger" onClick={() => {this.props.history.push('/pagetwo')}}>提哦哦哦</Button>
            </div>
        )   
    }   
}