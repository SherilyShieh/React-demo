import React, { useContext } from 'react'

// 1.创建上下文（注：需要通信的组件必须是使用同一个Context对象）
const MyContext = React.createContext();
// 2.提供上下文：Provider
const { Provider, Consumer } = MyContext;

function Child(prop) {
 return(
  <div>
   Child:
   { prop.foo}
  </div>
 );
}

// 消费方法2： 使用hook消费
function Child2() {
 const ctx = useContext(MyContext);
 return <di>Child2: {ctx.foo}</di>
}

// 使用class指定静态contextType
class Child3 extends React.Component {
 static contextType = MyContext;
 render() {
  return <div>Child3: { this.context.foo }</div>
 }
}
export default function ContextTest() {
 return (
  <div>
   <h1>跨组件通信</h1>
   {/* <MyContext.Provider></MyContext.Provider> */}
   <Provider value={{ foo : "bar" }}>
    {/* 3.消费 */}
    {/* 消费方法1： Consumer*/}
    <Consumer>
     { value => <Child { ...value }></Child> }
    </Consumer>
    <Consumer>
     { value => <Child { ...value }></Child> }
    </Consumer> 
    {/* 消费方法2:hook */}
    <Child2></Child2>   
     {/* 消费方式3:contextType  */}
    <Child3></Child3>
   </Provider>
  </div>
 );
}
