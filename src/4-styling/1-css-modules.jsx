import React from "react";

import styles from "./styles/User.module.css";

const User = ({ userName, description }) => (
  <div className={styles.container}>
    <div className={styles.avatar}></div>
    <div>
      <h2 className={styles.username}>{userName}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

const Main = () => (
  <User userName="Lorem Ipsum" description="Dolor ati ament" />
);

export default Main;
