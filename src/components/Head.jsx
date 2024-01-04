import React from 'react';
import { FaUserGraduate, FaBell, FaBars } from 'react-icons/fa';
import styles from '../styles/Head.module.css';

const Head = () => {
  const iconStyle = {
    color: '#8b1f8b',
  };

  return (
    <div className={styles.headContainer}>
      <div className={styles.leftIcons}>
        <FaBars className={styles.icon} style={iconStyle} />
      </div>

      <div className={styles.rightIcons}>
        <FaBell className={styles.icon} style={iconStyle} />
        <div className={styles.iconSpacing} />
        <FaUserGraduate className={styles.icon} style={iconStyle} />
      </div>
    </div>
  );
};

export default Head;
