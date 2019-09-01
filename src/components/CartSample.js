import React, { Component } from 'react'

export default class CartSample extends Component {
 // 状态的初始化一般放在构造器中
 constructor(props) {
  super(props);

  this.state = {
   text: "",
   goods: [
    { id: 1, text: 'tetette'},
    { id: 2, text: 'shshuww'},
   ]
  }
 }

 textChange = (e) => {
  this.setState(
   {
    text: e.target.value
   }
  )
 }

 addGood = () => {
  this.setState(preState => {
   // preState.goods.push({
   //  id: preState.goods.length + 1,
   //  text: preState.text
   // })
   return {
    goods: [
     ...preState.goods,
     {
      id: preState.goods.length + 1,
      text: preState.text
     }
    ]
   };
  });
 }
 render() {
  const title = this.props.title ? <h1> {this.props.title} </h1> : null;
  return (
   <div>
    {/* 条件渲染 */}
    { title }
    {/* 短路逻辑 */}
    { this.props.title && <h1> {this.props.title} </h1> }

    {/* 列表渲染 */}
    <ul>
     { this.state.goods.map(good => <li key={good.id}>{good.text}</li>) }
    </ul>
    <div>
      <input type="type" value={this.state.text} onChange={this.textChange}/>
      <button onClick={this.addGood}>添加</button>
    </div>



   </div>
  )
 }
}
