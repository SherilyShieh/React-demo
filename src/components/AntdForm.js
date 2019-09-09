import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
class NormalLoginForm extends Component {
 handleSubmit = e => {
  e.preventDfault();
  this.props.form.validateFields((err, values) => {
   if (!err) {
    console.log("Received values of form:", values);
   }
  });
 };

 render() {
  const { getFieldDecorator } = this.props.form;
  return(
  <Form onSubmit={this.handleSubmit} className="login-form">
   <Form.Item>
    {getFieldDecorator("userName", {
     rules: [{ required: true, message: "please input your username!" }]
    })(
     <Input 
     prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25" }}/>}
     placeholder="username"
     />
    )}
   </Form.Item>
   <Form.Item>
    {getFieldDecorator("password", {
     rules: [{ required: true, message: "please input your password!" }]
    })(
     <Input 
     prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25" }}/>}
     placeholder="password"
     />
    )}
   </Form.Item> 
   <Form.Item>
    <Button 
     type="primary"
     htmlType="submit"
     className="login-form-button">
     Log in
    </Button>
   </Form.Item>  
  </Form>
  );
 }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(NormalLoginForm);
export default WrappedNormalLoginForm;
