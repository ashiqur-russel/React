import React, { Component } from 'react'

class Counter extends Component {

    state = {
        count: 0
    }
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCount}>Count: {this.state.count}</button>

            </div>
        )
    }
}


export default Counter;
