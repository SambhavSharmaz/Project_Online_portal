import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const { data } = await axios.get('/api/exams');
        setExams(data);
      } catch (error) {
        console.error('Failed to fetch exams:', error);
      }
    };

    fetchExams();
  }, []);

  return (
    <div>
      <Typography.Title level={2}>User Dashboard</Typography.Title>
      <List
        itemLayout="vertical"
        dataSource={exams}
        renderItem={(exam) => (
          <List.Item
            key={exam._id}
            actions={[
              <Link to={`/exam/${exam._id}`}>
                <Button type="primary">Attempt Exam</Button>
              </Link>,
            ]}
          >
            <List.Item.Meta title={exam.title} />
            {exam.description}
          </List.Item>
        )}
      />
    </div>
  );
};

export default UserDashboard;
