import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super();
        this.state ={
            count:1
        }
    }
    increment (){
        // this.state.count = this.state.count + 1;
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log('Callback Value',this.state.count);
        // })

        this.setState(prevState=>({
            count:prevState.count + 1
        }));
        console.log(this.state.count);
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                count -{this.state.count}
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}
