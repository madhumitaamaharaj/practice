import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import Sidebar from './Sidebar';
import styles from '../styles/AdminDashboard.module.css';

const AdminDashboard = () => {
  return (
    <div>
      <Head />
      <Sidebar />
      <div className={styles.container}>
        <Link to="/add-question" className={styles.link}>
          <div className={styles.item} style={{ backgroundColor: '#e57373' }}>
            <strong>Add Question</strong>
          </div>
        </Link>

        <Link to="/manage-question" className={styles.link}>
          <div className={styles.item} style={{ backgroundColor: '#81c784' }}>
            <strong>Manage Question Bank</strong>
          </div>
        </Link>
        <Link to="/manage-student" className={`${styles.link} ${styles.container4}`}>
        <div className={styles.item} style={{ backgroundColor: '#ff8a65' }}>
          <strong>Manage Student</strong>
        </div>
      </Link>
        <Link to="/exam-report" className={styles.link}>
          <div className={styles.item} style={{ backgroundColor: '#64b5f6' }}>
            <strong>Exam Report</strong>
          </div>
        </Link>

        
      </div>
    </div>
  );
};

export default AdminDashboard;
