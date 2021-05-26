import React, { Component } from 'react'
import './Counter.css';

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             incrementValue: 1
        }
    }
    
    setIncrementValue = (e) => {
        this.setState({incrementValue: parseInt(e.target.value)});
    }

    increaseCounterValue = () => {
        let newCounterValue = this.state.count + this.state.incrementValue;
        this.setState({count: newCounterValue});
    }

    decreaseCounterValue = () => {
        let newCounterValue = this.state.count - this.state.incrementValue;
        this.setState({count: newCounterValue});
    }

    render() {
        return (
            <div>
                <h3 data-testid="header" >My Counter</h3>

                <h2 data-testid="counter" className={`${this.state.count >= 100 ? "green" : ""}${this.state.count <= -100 ? "red" : ""}`}>
                    {this.state.count}
                </h2>

                <button data-testid="substract-button" onClick={this.decreaseCounterValue}>-</button>
                <input style={{ textAlign: 'center' }} type="number" data-testid="input" 
                    value={this.state.incrementValue} onChange={this.setIncrementValue.bind(this)}
                />
                <button data-testid="add-button" onClick={this.increaseCounterValue}>+</button>
            </div>
        )
    }
}

export default Counter
