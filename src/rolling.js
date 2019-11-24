import React, { Component } from 'react'
import './App.css';
import Image from './Image'
import Number from './number'
import KeyboardEventHandler from 'react-keyboard-event-handler';

export default class Rolling extends Component {
    onClickHandle = () =>{
        this.props.backtoStart();
    }
    render() {
        return (
            <div class = "row center_item">
                <div class = "col-12">
                    <Image/>
                </div>
                <div class = "col_quay_so1 col-8 numm">
                    <Number backToStart = {this.onClickHandle}/>
                </div>
                <div class = "col-12">
                    <button type="button" class="btn btn-primary col-inner" onClick = {this.onClickHandle}>Back</button>
                </div>
                <KeyboardEventHandler handleKeys={['space']} onKeyEvent={this.onClickHandle} />
            </div>
        )
    }
}
