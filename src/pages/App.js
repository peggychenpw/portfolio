import React from "react";
import styles from "./App.module.scss";
import HomePage from "./HomePage/index";
import WorkPage from "./WorkPage/index";


const App = (props) => {
  const { location } = props;
  return (
    <div className={styles.App}>


      <HomePage />
      <WorkPage />

    </div >
  );
};

export default App;
