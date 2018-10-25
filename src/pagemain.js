import React, { Component } from 'react';
import './App.css'
import { Button } from 'antd';

export default class pageTwo extends React.Component{
    render(){
        return (
            <div>        
                <div>Page main</div>
                <Button type="danger" onClick={() => {this.props.history.push('/pageone')}}>都懂得</Button>
            </div>
        )   
    }   
}