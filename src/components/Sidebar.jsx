import React from 'react';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaPowerOff ,FaQuestionCircle,FaNewspaper} from 'react-icons/fa';
import { BsDatabaseFillLock } from "react-icons/bs";
import { Link } from 'react-router-dom';

import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const iconStyle = {
    color: '#8b1f8b', 
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.button}>
      <Link to="/admin-dashboard" className={styles.linkunderline}>
        <p>
          <span className={styles.icon} style={iconStyle}>
          <MdSpaceDashboard/>
          </span>
          <strong style={iconStyle}>Dashboard</strong>
        </p>
        </Link>
      </div>
      <div className={styles.button}>
      <Link to="/admin-dashboard" className={styles.linkunderline}>
      <p>
        <span className={styles.icon} style={iconStyle}>
        <FaQuestionCircle />
        </span>
        <strong style={iconStyle}> Questions Bank</strong>
      </p>
    </Link>
    
      </div>
      <div className={styles.button}>
      <Link to="/admin-dashboard" className={styles.linkunderline}>
      <p>
        <span className={styles.icon} style={iconStyle}>
        <BsDatabaseFillLock />
        </span>
        <strong style={iconStyle}> Students Access</strong>
      </p>
    </Link>
    
      </div>
      <div className={styles.button}>
      <Link to="/admin-dashboard" className={styles.linkunderline}>
      <p>
        <span className={styles.icon} style={iconStyle}>
        <FaNewspaper />
        </span>
        <strong style={iconStyle}> Results</strong>
      </p>
    </Link>
    
      </div>
      <div className={styles.button}>
        <p>
          <span className={styles.icon} style={iconStyle}>
            <FaPowerOff />
          </span>
          <strong style={iconStyle}>Logout</strong>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;