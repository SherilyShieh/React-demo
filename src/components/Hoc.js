import React, { Component } from 'react'

const withKaikeba = Comp =>{
 // 获取name, name可能来自于借口或者其他方式
 const name = "高阶组件";
 // return props => <Comp { ...props } name={ name }></Comp>
 return class NewComp extends React.Component {
  componentDidMount() {
   console.log("do something");
  }
  render() {
   return <Comp {...this.props} name={name}></Comp>
  }
 }
}

const withLog = Comp => {
 console.log(Comp.name, "渲染了")
 return props => <Comp {...props}></Comp>
};

// const NewKaikeba = withLog(withKaikeba(withLog(kaikeba)));

@withLog
@withKaikeba
@withLog
class Kaikeba extends Component {
 render() {
 return <div>{ this.props.stage } - { this.props.name }</div>
 }
}

export default class Hoc extends Component {
 render() {
  return (
   <div>
    <Kaikeba stage="React"></Kaikeba>
   </div>
  )
 }
}
