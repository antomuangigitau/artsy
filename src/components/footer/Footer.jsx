import { useState } from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import email from '../../assets/images/email.png';
import location from '../../assets/images/location.png';
const items = [
  {
    title: 'Home',
  },
  {
    title: 'Marketplace',
  },
  {
    title: 'Auctions',
  },
  {
    title: 'Drop',
  },
  {
    title: 'Blog',
  },
  {
    title: 'Wallets',
  },
  {
    title: 'Rates',
  },
  {
    title: 'High bids',
  },
];

const emailLocation = [
  {
    img: email,
    title: 'artsystudios@gmail.com',
  },
  {
    img: location,
    title: 'Nairobi,Kenya',
  },
];

const getYear = new Date().getFullYear().toString();
const Footer = () => {
  const [subscribe, setSubscribe] = useState('');
  return (
    <footer>
      <section className={styles.footer}>
        <div className={styles['footer__container']}>
          <div className={styles['newsletter']}>
            <h3>NewsLetter</h3>
            <p>Subscribe to get daily updates on new drops & exciting deals </p>
            <div className={styles['subscribe']}>
              <div>
                <input
                  type="text"
                  name="subscribe"
                  placeholder="Enter your name"
                  value={subscribe}
                  onChange={(e) => setSubscribe(e.target.value)}
                />
              </div>
              <button>subscribe</button>
            </div>
          </div>
        </div>
        <div className={styles['footer__links']}>
          <h3>ARTSY.</h3>
          <div className={styles['links']}>
            <ul>
              {items
                .filter((item, index) => index < 4)
                .map((item) => {
                  const { title } = item;
                  const titlePath = title.toLowerCase().replace(/\s/g, '');
                  return (
                    <li>
                      <Link key={title} to={`/${titlePath}`}>
                        {title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <ul>
              {items
                .filter((item, index) => index > 3)
                .map((item) => {
                  const { title } = item;
                  const titlePath = title.toLowerCase().replace(/\s/g, '');
                  return (
                    <li>
                      <Link key={title} to={`/${titlePath}`}>
                        {title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <ul className={styles['email__location']}>
            {emailLocation.map((item) => {
              const { img, title } = item;
              return (
                <li key={title}>
                  <img src={img} alt={title} />
                  <p>{title}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <p className={styles['get__year']}>
          Artsystudios &copy; {getYear}. All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
