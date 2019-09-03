import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CompType2, CompType } from './components/CompType';
import Clock from './components/Clock';
import StateTest from './components/StateTest';
import CartSample from './components/CartSample';
import LifeCycle from './components/LifeCycle';
import AntdTest from './components/AntdTest';
import CommentList from './components/CommentList';
import Hoc from './components/Hoc';
import Composition from './components/Composition';
import HookTest from './components/HookTest';
import ContextTest from './components/ContextTest';

class App extends Component {
  state = {
    prop: "some prop"
  }
  componentDidMount() {
    this.setState({ prop: "a new prop "})
    setTimeout(() => {
      this.setState({
        prop: ""
      })
    }, 2000);
  }
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
        {/* 条件与循环 */}
        <CartSample title="shoppingCart"></CartSample>
        {/* 生命周期 */}
        { this.state.prop && <LifeCycle prop="this.state.prop"></LifeCycle> }

        <AntdTest></AntdTest>

        <CommentList></CommentList>

        {/* 高阶组件 */}
        <Hoc></Hoc>

        {/* 组件复合 */}
        <Composition></Composition>

        {/* hook */}
        <HookTest></HookTest>

        {/* 跨组件通信 */}
        <ContextTest></ContextTest>
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
