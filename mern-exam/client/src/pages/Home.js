import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined, FileOutlined, DashboardOutlined } from '@ant-design/icons';
import '../layout.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="page-title">
        <h2>Welcome to the Exam Portal</h2>
      </div>
      <div className="page-content">
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Link to="/create">
              <Card
                hoverable
                cover={<PlusOutlined style={{ fontSize: '64px', padding: '20px', color: '#1890ff' }} />}
                className="home-card"
              >
                <Card.Meta title="Create Exam" description="Create a new exam" />
              </Card>
            </Link>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Link to="/dashboard">
              <Card
                hoverable
                cover={<FileOutlined style={{ fontSize: '64px', padding: '20px', color: '#1890ff' }} />}
                className="home-card"
              >
                <Card.Meta title="User Dashboard" description="View and manage your exams" />
              </Card>
            </Link>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Link to="/admin">
              <Card
                hoverable
                cover={<DashboardOutlined style={{ fontSize: '64px', padding: '20px', color: '#1890ff' }} />}
                className="home-card"
              >
                <Card.Meta title="Admin Dashboard" description="Manage the platform" />
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
