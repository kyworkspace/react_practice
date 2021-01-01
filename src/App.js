import React, { Component } from 'react';
import './App.css';
import Input from './03/Input';

class App extends Component {
    render() {
    return (
      <Input name="kyp" type="number" errorMassage="에러" label='라벨' autoFocus={true} onFocus={()=>{console.log("엘리먼트선택")}}/>
    );
  }
}

export default App;
