import React from 'react';
import { marketPics } from '../../../../data';
import styles from './Profileimg.module.css';
import { Link } from 'react-router-dom';
const Profileimg = () => {
  return (
    <article className={styles.main}>
      <div className={styles.articles}>
        {marketPics.map((items) => {
          const { id, img, title } = items;
          return (
            <article key={id} className={styles.container}>
              <Link to={`/marketplace/${id}`}>
                <img src={img} alt={title} />
              </Link>
              <h4>{title}</h4>
              <p>$3.90</p>
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default Profileimg;
