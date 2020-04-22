import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            text: "text is text"
        }
    }
    
    render() { 
        return (
            <div>
                <h1>{this.state.count}</h1>
                <p>{this.state.text}</p>
                <button onClick={() => this.incrementCount()}>Increment</button>
            </div>
        )
    }
    incrementCount() {
        // const {count} = this.state
        this.setState({count: this.state.count +1})
    }
}
 
export default Counter;