import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/create">Create Exam</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/admin">Admin Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/dashboard">User Dashboard</Link>
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
