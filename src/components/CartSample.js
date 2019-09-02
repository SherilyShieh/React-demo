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
   ],
   cart: []
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

 // 处理数量更新
 add = good => {
  const newCart = [...this.state.cart];
  const idx = newCart.findIndex(c => c.id === good.id);
  const item = newCart[idx];
  newCart.splice(idx, 1, { ...item, count: item.count + 1});
  // 更新
  this.setState({ cart: newCart });
 }
 minus = good => {
  const newCart = [...this.state.cart];
  const idx = newCart.findIndex(c => c.id === good.id);
  const item = newCart[idx];
  newCart.splice(idx, 1, { ...item, count: item.count - 1});
  // 更新
  this.setState({ cart: newCart });
 }
 // 加购函数
 addToCart = (good) => {
  //创建新购物车
  const newCart = [ ...this.state.cart ];
  const idx = newCart.findIndex(c => c.id === good.id);
  const item = newCart[idx];
  if (item) {
   newCart.splice(idx, 1, { ...item, count: item.count + 1 });
  } else {
   newCart.push({ ...good, count: 1 });
  }
  // 更新
  this.setState({
   cart: newCart
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
     { this.state.goods.map(good => <li key={good.id}>
      { good.text }
      <button onClick= {() => this.addToCart(good)}>添加</button>
     </li>) }
    </ul>
    <div>
      <input type="type" value={this.state.text} onChange={this.textChange}/>
      <button onClick={this.addGood}>添加到购物车</button>
    </div>

   {/* 购物车 */}
   <Cart 
    data={ this.state.cart }
    minus={ this.minus }
    add={ this.add }></Cart>
   </div>
  )
 }
}
// 函数式组件
function Cart({data, minus, add}) {
 return (
  <table>
   <tbody>
    { data.map(d => (
     <tr key={d.id}>
      <td>{ d.text }</td>
      <td>
       <button onClick={() => minus(d)}>-</button>
       { d.count }
       <button onClick={() => add(d)}>+</button>
      </td>
     </tr>
    ))}
   </tbody>
  </table>
 )
}
