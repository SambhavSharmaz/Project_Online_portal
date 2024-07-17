import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Typography, notification } from 'antd';
import '../layout.css'

const { TextArea } = Input;

const CreateExam = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([...questions, { questionText: '', options: [], answer: '' }]);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/exams', { title, questions });
      notification.success({ message: 'Exam created successfully!' });
    } catch (error) {
      notification.error({ message: 'Failed to create exam' });
    }
  };

  return (
    <div>
      <Typography.Title level={2}>Create Exam</Typography.Title>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Exam Title">
          <Input value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Item>
        {questions.map((q, idx) => (
          <div key={idx}>
            <Form.Item label={`Question ${idx + 1}`}>
              <TextArea
                value={q.questionText}
                onChange={e => {
                  const newQuestions = [...questions];
                  newQuestions[idx].questionText = e.target.value;
                  setQuestions(newQuestions);
                }}
              />
            </Form.Item>
            <Form.Item label="Options">
              <TextArea
                value={q.options.join('\n')}
                onChange={e => {
                  const newQuestions = [...questions];
                  newQuestions[idx].options = e.target.value.split('\n');
                  setQuestions(newQuestions);
                }}
              />
            </Form.Item>
            <Form.Item label="Answer">
              <Input
                value={q.answer}
                onChange={e => {
                  const newQuestions = [...questions];
                  newQuestions[idx].answer = e.target.value;
                  setQuestions(newQuestions);
                }}
              />
            </Form.Item>
          </div>
        ))}
        <Form.Item>
          <Button type="dashed" onClick={addQuestion}>
            Add Question
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Exam
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateExam;
