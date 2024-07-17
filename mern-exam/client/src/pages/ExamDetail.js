import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Radio, Button, Typography, Alert } from 'antd';
import '../layout.css';

const ExamDetail = () => {
  const { id } = useParams();
  const [exam, setExam] = useState(null);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const { data } = await axios.get(`/api/exams/${id}`);
        setExam(data);
      } catch (error) {
        setError('Failed to fetch exam.');
      }
    };
    fetchExam();
  }, [id]);

  const handleAnswerChange = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    navigate(`/result`, { state: { exam, answers } });
  };

  if (!exam) return <Typography.Title>Loading...</Typography.Title>;

  return (
    <div className="page-container">
      <Typography.Title level={2} className="page-title">{exam.title}</Typography.Title>
      <div className="page-content">
        <Typography.Paragraph>{exam.description}</Typography.Paragraph>
        {error && <Alert message={error} type="error" />}
        <Form onFinish={handleSubmit}>
          {exam.questions.map((question, index) => (
            <Form.Item key={question._id} label={`Q${index + 1}: ${question.questionText}`} required>
              <Radio.Group onChange={(e) => handleAnswerChange(question._id, e.target.value)}>
                {question.options.map((option, oIndex) => (
                  <Radio key={oIndex} value={option}>
                    {option}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          ))}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Exam
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ExamDetail;
