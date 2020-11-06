import React from "react";
import styles from "./detail.module.scss";

const WorkPageDetail = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.title}>
          <h1>Jalan</h1>
          <p>Sep 2017 to Aug 2018</p>
          <section className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio soluta quia enim expedita, accusamus odio debitis,
              voluptates omnis optio laboriosam ratione voluptatem vero quod
              neque! Optio odit corporis dolorum mollitia.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              iusto explicabo accusantium fugiat, maxime sequi in, ratione natus
              odit provident pariatur. Magnam a autem, labore minus corporis
              nulla ad tenetur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              voluptates ullam modi obcaecati necessitatibus libero cumque,
              velit assumenda natus ut fuga voluptatibus, nulla perferendis
              perspiciatis non, nihil repellendus praesentium pariatur!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id,
              nihil iusto rem voluptates corporis debitis totam maxime veniam
              excepturi repellendus et numquam ab aspernatur incidunt neque
              architecto labore fugit?
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WorkPageDetail;
