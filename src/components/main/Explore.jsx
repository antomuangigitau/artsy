import { Link } from 'react-router-dom';
import styles from './Explore.module.css';
import arrow from '../../assets/images/linkArrow.png';
const explore = [
  {
    id: 1,
    link: 'Explore marketplace',
  },
  {
    id: 2,
    link: 'See auctions ',
  },
];
const Explore = () => {
  return (
    <section className={styles.explore}>
      <div className={styles['explore__container']}>
        <div className={styles.lone}></div>
        {explore.map((item) => {
          const { id, link } = item;
          return (
            <div key={id} className={styles['inner']}>
              <div className={styles['inner__container']}>
                <div className={styles['container']}>
                  <h4>{link}</h4>
                  <Link to="/">
                    <img src={arrow} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Explore;
