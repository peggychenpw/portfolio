import React from "react";
import styles from "./App.module.scss";
import { Link, Route, withRouter } from "react-router-dom";
import HomePage from "./HomePage/index";
import WorkPage from "./WorkPage/index";
import WorkPageDetail from "./WorkPageDetail/index";

const App = (props) => {
  const { location } = props;
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.box}>
          <div className={styles.boxleft}></div>
          <div className={styles.boxright}>
            <Link to="/">
              <p className={location.pathname === "/" ? styles.selected : null}>
                HOME
              </p>
            </Link>
            <Link to="/works">
              <p
                className={
                  location.pathname === "/works" ? styles.selected : null
                }
              >
                PROJECTS
              </p>
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.content}>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/works" exact>
          <WorkPage />
        </Route>
        <Route path="/works/:id">
          <WorkPageDetail />
        </Route>
      </section>

      <footer className={styles.footer}>
        <div>&copy;Created by Peggy Chen</div>
      </footer>
    </div>
  );
};

export default withRouter(App);
