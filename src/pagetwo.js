import React, { Component } from 'react';
import './App.css'
import { Button } from 'antd';

export default class pageTwo extends React.Component{
    render(){
        return (
            <div>        
                <div>Page two</div>
                <Button type="danger" onClick={() => {this.props.history.push('/pagethree')}}>条状</Button>
            </div>
        )   
    }   
}