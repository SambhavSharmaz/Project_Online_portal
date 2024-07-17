import React, { useState, useContext } from 'react';
import { Form, Input, Button, Typography, notification } from 'antd';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await login(email, password);
      navigate('/');
      notification.success({ message: 'Logged in successfully!' });
    } catch (error) {
      notification.error({ message: 'Failed to login' });
    }
  };

  return (
    <div>
      <Typography.Title level={2}>Login</Typography.Title>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Email">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
