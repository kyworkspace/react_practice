import React, { Component } from 'react';
import './App.css';
import NewCounter from './03/NewCounter';
import Counter from './03/Counter';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {count:10}
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount(){
    this.setState(({count}) => ({count : count+10}));
  }

  render() {
    return (
      <div className="body">
      <Counter count={this.state.count}/>
      <NewCounter count={this.state.count}/>
      <button onClick={this.resetCount}>{this.state.count+10}으로 초기화</button>
    </div>
    );
  }
}

export default App;
