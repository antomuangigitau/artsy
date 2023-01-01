import { pages } from '../../data';
import { Link } from 'react-router-dom';
import { Cart, Search } from '../../icons';
import { openHamburger, closeHamburger } from '../../feature/hamburgerSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from './SmallNav.module.css';
import hamburger from '../../assets/images/hamburger.png';
import message from '../../assets/images/message.png';
import close from '../../assets/images/close.png';
const SmallNav = () => {
  const { open } = useSelector((state) => state.hamburger);
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <div
        className={`${
          open ? styles['overlay'] + ' ' + styles['open'] : styles['overlay']
        }`}
      ></div>
      {/* menu  */}

      <div
        className={`${
          open
            ? styles['container__links'] + ' ' + styles['links__open']
            : styles['container__links']
        }`}
      >
        <div className={styles['header__links']}>
          <h3>ARTSY.</h3>
          <button
            className={styles['close__hamburger']}
            type="button"
            onClick={() => {
              dispatch(closeHamburger());
            }}
          >
            <img src={close} alt="close" />
          </button>
        </div>
        <ul>
          {pages.map((link) => {
            const { id, page, path } = link;
            return (
              <li className={styles['links__list']} key={id}>
                <Link className={styles.link} to={path}>
                  {page}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.message}>
          <img src={message} alt="message" />
        </div>
      </div>
      {/* menu  */}
      <nav className={styles.nav}>
        <button
          type="button"
          className={styles.hamburger}
          onClick={() => {
            dispatch(openHamburger());
          }}
        >
          <img src={hamburger} alt="hamburger" />
        </button>
        <h3>ARTSY.</h3>
        <div className={styles['btn__section']}>
          <button>
            <Search />
          </button>
          <button>
            <Cart />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default SmallNav;
