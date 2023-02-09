import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Counters from './components/counters';
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
      { id: 4, value: 1 },
    ],
  };
  constructor(){
    super();
    // console.log('app constructor');
  }
  componentDidMount(){
    // console.log('app mounted')
  }
  handleUpdate(counters){
    
    counters= counters.filter((el)=>el.value>0)
    this.setState({ counters });

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
   this.handleUpdate(counters)
  };
  handleDecrement =(counter)=>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if(counters[index].value>0)counters[index].value--;
    this.handleUpdate(counters)
  }
  handleAdd = () =>{
    // console.log(this.state.counters)
    const counters = [...this.state.counters];
    if(counters.length>0)
    counters.push({id: counters[counters.length-1].id+1,
    value: 1
  })
  else counters.push({id:1,
    value:1})
    this.setState({counters});
    // console.log(this.state.counters,counters);
  }
  render(){
    // console.log('app rendered')
    return (
      <React.Fragment>
  
  
      <Navbar totalCounters={this.state.counters.filter(c=> c.value>0).length}></Navbar>
      <main className="container">
      <Counters 
      counters = {this.state.counters}
      onReset={this.handleReset}
      onAdd = {this.handleAdd}
      onIncrement= {this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete= {this.handleDelete}/>
      </main>
      </React.Fragment>
    );
  }
  
}

export default App;
