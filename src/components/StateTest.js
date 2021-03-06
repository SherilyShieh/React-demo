import React, { Component } from 'react'

export default class StateTest extends Component {
 state = {
  counter: 1
 };

 componentDidMount() {
  // 直接修改state无法生效
  // this.state.counter += 1;
  //批量执行
  // this.setState(obj, cb)
  // this.setState(fn, cb)
  this.setState({counter: this.state.counter + 1});
  // this.setState({counter: this.state.counter + 1});
  // this.setState({counter: this.state.counter + 1});
  //函数式赋值
  this.setState(prevState => {
   return {
    counter: prevState.counter + 1
   }
  })
  this.setState(prevState => {
   return {
    counter: prevState.counter + 1
   }
  })
 }
 render() {
  return (
   <div>
    { this.state.counter }
   </div>
  )
 }
}
