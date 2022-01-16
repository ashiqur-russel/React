import React, { Component } from 'react'

class Home extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
        this.state = {
            data: 1
        }
    }

    updateData() {
        this.setState({ data: this.state.data + 1 })
        console.log("hello")
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>{this.state.data}</p>
                <button onClick={() => this.updateData()}>Update Data</button>
            </div>
        )
    }
}

export default Home
