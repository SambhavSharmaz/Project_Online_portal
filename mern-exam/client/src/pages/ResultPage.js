import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, List } from 'antd';
import '../layout.css';

const ResultPage = () => {
  const location = useLocation();
  const { exam, answers } = location.state;

  const calculateScore = () => {
    let score = 0;
    exam.questions.forEach((question) => {
      if (answers[question._id] === question.correctOption) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="page-container">
      <Typography.Title level={2} className="page-title">Exam Results</Typography.Title>
      <div className="page-content">
        <Typography.Paragraph>Title: {exam.title}</Typography.Paragraph>
        <Typography.Paragraph>Description: {exam.description}</Typography.Paragraph>
        <Typography.Paragraph>Score: {calculateScore()} / {exam.questions.length}</Typography.Paragraph>
        <List
          itemLayout="horizontal"
          dataSource={exam.questions}
          renderItem={(question) => (
            <List.Item>
              <List.Item.Meta
                title={`Q: ${question.questionText}`}
                description={`Your Answer: ${answers[question._id] || 'Not Answered'}, Correct Answer: ${question.correctOption}`}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ResultPage;
