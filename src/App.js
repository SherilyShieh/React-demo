import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CompType2, CompType } from './components/CompType';
import Clock from './components/Clock';
import StateTest from './components/StateTest';

class App extends Component {
  formatName(user){
    return user.firstName + ' ' + user.lastName;
  }
  render() {
    const name = 'Sherily Shieh';
    const user = { firstName: 'Sherily', lastName: 'Shieh'};
    const jsx = <p>hello, Sherily</p>
    return (
      <div className="App">
        {/* 表达式 */}
        <h1>{name}</h1>
        <h1>{this.formatName(user)}</h1>
        {/* 属性 */}
        <img src={logo} className="App-logo" alt="logo" style={{width: '100px'}} />
        {/* jsx也是表达式 */}
        { jsx }
        {/* 使用其他组件 */}
        <CompType name="heihei"></CompType>
        <CompType2 name="hoho"></CompType2>
        {/* State和状态改变setState */}
        <Clock></Clock>
        <StateTest></StateTest>
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
