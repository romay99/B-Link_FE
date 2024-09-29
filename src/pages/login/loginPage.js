import React from 'react';
import Header from '../../components/ui/Header';
import styles from './loginPage.module.css';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}></div>
    </div>
  );
};

export default LoginPage;
