import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Counters from './components/counters';
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  constructor(){
    super();
    console.log('app constructor');
  }
  componentDidMount(){
    console.log('app mounted')
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    // console.log("event handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  render(){
    console.log('app rendered')
    return (
      <React.Fragment>
  
  
      <Navbar totalCounters={this.state.counters.filter(c=> c.value>0).length}></Navbar>
      <main className="container">
      <Counters 
      counters = {this.state.counters}
      onReset={this.handleReset}
      onIncrement= {this.handleIncrement}
      onDelete= {this.handleDelete}/>
      </main>
      </React.Fragment>
    );
  }
  
}

export default App;
