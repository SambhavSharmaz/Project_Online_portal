import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      const { data } = await axios.get('/api/exams');
      setExams(data);
    };

    fetchExams();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this exam?')) {
      await axios.delete(`/api/exams/${id}`);
      setExams(exams.filter((exam) => exam._id !== id));
    }
  };

  return (
    <div>
      <Typography.Title level={2}>Admin Dashboard</Typography.Title>
      <List
        itemLayout="vertical"
        dataSource={exams}
        renderItem={(exam) => (
          <List.Item
            key={exam._id}
            actions={[
              <Button type="link" danger onClick={() => handleDelete(exam._id)}>
                Delete
              </Button>,
              <Link to={`/exam/${exam._id}`}>View Details</Link>,
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

export default AdminDashboard;
