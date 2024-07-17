import React, { useState, useContext } from 'react';
import { Form, Input, Button, Typography, notification } from 'antd';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await register(name, email, password);
      navigate('/');
      notification.success({ message: 'Registered successfully!' });
    } catch (error) {
      notification.error({ message: 'Failed to register' });
    }
  };

  return (
    <div>
      <Typography.Title level={2}>Register</Typography.Title>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Name">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Email">
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
