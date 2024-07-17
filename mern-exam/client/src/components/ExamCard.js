import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const ExamCard = ({ exam }) => {
  return (
    <Card title={exam.title}>
      <Link to={`/exam/${exam._id}`}>View Details</Link>
    </Card>
  );
};

export default ExamCard;
