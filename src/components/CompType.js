import React from 'react'

// 函数类型的组件
export function CompType(props) {
 return (
  <div>
   CompType, { props.name }
  </div>
 )
}

// 基于类的组件
export class CompType2 extends React.Component{
 render() {
  return(
   <div>
    CompType2, { this.props.name }
   </div>
  );
 }
}
