import React, { Component } from 'react'
import './App.css';
import Image from './Image'
import Number from './number'
export default class Rolling extends Component {
    onClickHandle = () =>{
        this.props.backtoStart();
    }
    render() {
        return (
            <div class = "row">
                <div class = "col-12">
                    <Image/>
                </div>
                <div class = "col_quay_so1 col-4 numm">
                    <Number/>
                </div>
                <div class = "col_quay_so1 col-4 numm">
                    <Number/>
                </div>
                <div class = "col_quay_so1 col-4 numm">
                    <Number/>
                </div>
                <div class = "col-12">
                    <button type="button" class="btn btn-primary col-inner" onClick = {this.onClickHandle}>Back</button>
                </div>
            </div>
        )
    }
}
