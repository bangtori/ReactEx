import { Component } from "react";
import Counter from './Counter';
import './App.css'
class App extends Component {
  render() {
    return (
    <div className="container">
            <Counter />
    </div>
    );
  }
}

export default App;
