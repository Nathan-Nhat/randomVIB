import React, { Component } from 'react'
import './App.css';
export default class Start extends Component {
    onClickHandle = ()=>{
        this.props.setRolling(true);
    }
    render() {
        return (
            <div class = "row">
                <div class="col_quay_so1 col-12 start">
                        <button type="button" class="btn btn-primary col-inner" onClick = {this.onClickHandle}>START</button>
                </div>
            </div>
        )
    }
}