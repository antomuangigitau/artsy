import React from 'react';
import styles from './Creators.module.css';
const items = [
  {
    id: 1,
    title: 'Editorials',
  },
  {
    id: 2,
    title: 'Fashion',
  },
  {
    id: 3,
    title: 'Lifestyle',
  },
  {
    id: 4,
    title: 'Blueprint',
  },
];
const Creators = () => {
  return (
    <section className={styles.creators}>
      <div className={styles['image__bg']}></div>
      <div className={styles['creators__container']}>
        <div className={styles['creator']}>
          <p>TOP CREATORS OF THE WEEK</p>
          <div className={styles.titles}>
            <div className={styles.title}>
              <div></div>
            </div>
            <ul className={styles.list}>
              {items.map((item) => {
                const { id, title } = item;
                return <li key={id}>{title}</li>;
              })}
            </ul>
          </div>
        </div>
        <p className={styles.everything}>
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
        <p className={styles.year}>1985</p>
      </div>
    </section>
  );
};

export default Creators;
