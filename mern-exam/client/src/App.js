import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './pages/Home';
import CreateExam from './pages/CreateExam';
import ExamDetail from './pages/ExamDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import UserDashboard from './pages/UserDashboard';
import ResultPage from './pages/ResultPage';

const { Content, Footer } = Layout;

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout className="layout">
          <Header />
          <Content style={{ padding: '0 50px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateExam />} />
              <Route path="/exam/:id" element={<ExamDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/result" element={<ResultPage />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>MERN Exam Portal ©2024</Footer>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
