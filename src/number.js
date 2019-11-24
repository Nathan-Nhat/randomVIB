import React, { Component } from 'react'
import './App.css'
export default class Number extends Component {
    intervalID = 0;
    timeoutId = 0;
    randomNumber = 0;
    constructor(props)
    {
        super(props);
        this.state = {
            chuc : 0,
            donvi : 0
        }
    }

    checkNumber = (param) => param === this.randomNumber;
    componentDidMount(){
        this.randomNumber = Math.floor(Math.random() * 28) + 1;
        var localStore = JSON.parse(localStorage.getItem('test')) ? JSON.parse(localStorage.getItem('test')) : [];
        if (localStore.length < 28)
        {
            
        }
        else
        {
            localStorage.removeItem('test');
            this.props.backToStart();
            if(window.confirm("Full of storage. Please delete storage before continue"))
            {
                return;
            }
        }
        console.log(this.randomNumber);
        console.log("Did mount");
        this.intervalID = setInterval(()=>{ 
            this.setState({chuc: Math.floor(Math.random() * 3),
            donvi : Math.floor(Math.random() * 10)}) 
        }, 50);
        this.timeoutId = setTimeout(() => { 
            clearInterval(this.intervalID);
                
                    console.log(localStore);
                    while(1)
                    {
                        if (localStore.find(this.checkNumber) === undefined){
                        this.setState({
                            chuc : Math.floor(this.randomNumber/10),
                            donvi : Math.floor(this.randomNumber%10)
                        })
                            localStore.push(this.randomNumber);
                            localStorage.setItem('test', JSON.stringify(localStore));
                        break;
                        }
                        this.randomNumber = Math.floor(Math.random() * 28) + 1;
                    }
            }, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
        clearTimeout(this.timeoutId);
    }
    render() {
        const {chuc, donvi} = this.state;
        return (
        <div class = "row">
            <div class = "col_quay_so1 col-6 numm">
                <div class="col-inner"><span class = "number">{chuc}</span></div>
            </div>
            <div class = "col_quay_so1 col-6 numm">
                <div class="col-inner"><span class = "number">{donvi}</span></div>
            </div>
        </div>
        )
        
    }
}
