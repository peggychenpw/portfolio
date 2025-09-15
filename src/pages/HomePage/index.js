import React from "react";
import styles from "./home.module.scss";


export default () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.brief}>
        <img src="/image/myPhoto.png" alt="myPhoto" />
        <h2>Peggy Chen</h2>
        <p>I create websites. I love using technology in creative contexts.</p>
        <p>I am a front-end developer based in Taipei, Taiwan.</p>
        <p>Contact me at <i>peggy.chen.pw@gmail.com</i></p>
      </div>


    </div>
  );
};
