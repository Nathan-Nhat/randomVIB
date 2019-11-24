import './App.css';
import Start from './start'
import Rolling from './rolling'
import React, { Component } from 'react'

export default class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            start : true,
        }
    }
    backToStart = () =>{
        this.setState({start : true});
    }
    startRolling = () =>{
        this.setState({start : false});
    }
    clearHandles = () =>{
        if(window.confirm("Do you want to clear storage?"))
            {
                localStorage.removeItem('test');
                this.setState({
                    start : true,
                })
            }
    }
    render() {
        const {start} = this.state;
        return (
            <div>
               <div id="wraper1" class="wraper_quayso container-fluid wraper"  >
                    <div class="row full-height" >
                        <div class="box_quayso container align-self-center">          
                            {start === true? <Start setRolling = {this.startRolling}/> : <Rolling backtoStart = {this.backToStart}/>}
                        </div>
                        <button type="button" class="btn btn-danger clear-btn" onClick = {this.clearHandles}>Clear</button>
                    </div>
                </div>   
            </div>
        )
    }
}

