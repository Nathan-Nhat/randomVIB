import React, { Component } from 'react'
import './App.css'
export default class Number extends Component {
    intervalID = 0;
    timeoutId = 0;
    constructor(props)
    {
        super(props);
        this.state = {
            number : 0, 
        }
    }

    componentDidMount(){
        console.log("Did mount");
        this.intervalID = setInterval(()=>{ 
            this.setState({number: Math.floor(Math.random() * 10)}) 
        }, 50);
        this.timeoutId = setTimeout(() => { clearInterval(this.intervalID); }, 2000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
        clearTimeout(this.timeoutId);
    }
    render() {
        const {number} = this.state;
        return (
            <div>
                <div class="col-inner">{this.state.number}</div>
            </div>
        )
    }
}
