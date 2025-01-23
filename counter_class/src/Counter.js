import { Component } from "react";
import './Counter.css'
class Counter extends Component {
    state = {
        count: 0
    }
  render() {
    return (
        <div className="container">
            <h1>{this.state.count}</h1>
            <div className="buttonContainer">
                <button onClick={ () => {
                    this.setState({count: this.state.count + 1});
                }}>+</button>
                <button onClick={ () => {
                    this.setState({count: this.state.count - 1});
                }}>-</button>
            </div>
        </div>
    )
  }
}

export default Counter;