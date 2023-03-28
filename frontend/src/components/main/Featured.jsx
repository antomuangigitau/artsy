import React from 'react';
import { Link } from 'react-router-dom';
import { contents } from '../../data';
import styles from './Featured.module.css';
const Featured = () => {
  return (
    <section>
      <div className={styles.featured}>
        <h3>Featured Products</h3>
        <div className={styles['container']}>
          {contents.map((content) => {
            const { id, img, header, text, creators, major, arrowImg } =
              content;
            return (
              <div key={id}>
                <hr />
                <div className={styles.content}>
                  <div className={styles['image__wrap']}>
                    <img className={styles['content__img']} src={img} alt="" />
                    <div className={styles['position__overlay']}>
                      <Link to={`/$id`}>
                        <p>View product</p>
                        <span>
                          <img src={arrowImg} alt="" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className={styles['inner__content']}>
                    <h4>{header}</h4>
                    <p>{text}</p>
                    <div className={styles.creator}>
                      <div className={styles['creator__container']}>
                        {creators.map((creator) => {
                          const { id, img } = creator;
                          return (
                            <img
                              className={styles['creator__img']}
                              key={id}
                              src={img}
                              alt={id}
                            />
                          );
                        })}
                        <p>{major}</p>
                      </div>
                      <span>
                        <img
                          className={styles['arrow']}
                          src={arrowImg}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
