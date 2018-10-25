import React, { Component } from 'react';
import './App.css'
import { Button } from 'antd';

export default class pageThree extends React.Component{
    render(){
        return (
            <div>        
                <div>Page three</div>
                <Button type="danger" onClick={() => {this.props.history.push('/pagemain')}}>对对对</Button>
            </div>
        )   
    }   
}