import { useState } from 'react';
import styles from './Upcoming.module.css';
import arrow from '../../assets/images/Arrow 3.png';
import radioBtn from '../../assets/images/Ellipse 6.png';
import next from '../../assets/images/next.png';
import prev from '../../assets/images/prev.png';
import Button from '../UI/Button';

const data = [
  {
    id: '01',
    title: 'MONALISA REDEFINED IN STYLE.',
    start: 'Start on : 08:00 GTS . Monday ',
    text: `GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE 
    WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.`,
  },
  {
    id: '02',
    title: 'MONALISA REDEFINED IN STYLE.',
    start: 'Start on : 08:00 GTS . Tuesday ',
    text: `GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE 
    WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.`,
  },
  {
    id: '03',
    title: 'MONALISA REDEFINED IN STYLE.',
    start: 'Start on : 08:00 GTS . Wednesday ',
    text: `GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE 
    WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.`,
  },
];
const Upcoming = () => {
  const [index, setIndex] = useState(0);
  const { id, title, start, text } = data[index];
  const nextBtn = () =>
    setIndex(index === Object.values(data).length - 1 ? 0 : (prev) => prev + 1);
  const prevBtn = () =>
    setIndex(index === 0 ? Object.values(data).length - 1 : (prev) => prev - 1);
  return (
    <section className={styles.upcoming}>
      <div className={styles.container}>
        <h2>See Upcoming Auctions and Exhibitions</h2>
        <img className={styles.arrow} src={arrow} alt="" />
        <div className={styles['upcoming__contents']}>
          <div className={styles['upcoming__content']}>
            <div className={styles['content__container']}>
              <div className={styles['contents']}>
                <div className={styles['first__div']}>
                  <img src={radioBtn} alt="checkbox" />
                  <h3>{title}</h3>
                </div>
                <div className={styles['second__div']}>
                  <h4>{id}</h4>
                  <h5>{start}</h5>
                </div>
              </div>
              <div className={styles['utils']}>
                <p>{text}</p>
                <a href="/">See more</a>
                <Button>Set a reminder</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['progress__bar']}>
          <div className={styles['progressbar']}>
            <div
              style={{
                width: index === 0 ? '47.56px' : index == 1 ? '50%' : '100%',
              }}
            ></div>
          </div>
          <div className={styles['show__progress']}>
            <button onClick={prevBtn}>
              <img src={prev} alt="prev" />
            </button>
            <button onClick={nextBtn}>
              <img src={next} alt="next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
{
  /* <div>
              <img src={radioBtn} alt="button" />
              <h3>MONALISA REDEFINED IN STYLE.</h3>
            </div>
            <div>
              <span>01</span>
              <p>Start on : 08:00 GTS . Monday</p>
            </div> */
}
