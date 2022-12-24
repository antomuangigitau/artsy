import { pages } from '../../data';
import { Link } from 'react-router-dom';
import { Cart, Notifications, Search } from '../../icons';
import styles from './Navbar.module.css';
import SmallNav from './SmallNav';

const Navbar = () => {
  return (
    <>
      <SmallNav />
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h3>ARTSY.</h3>
          <ul className={styles['links']}>
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
          <div className={styles['btn__section']}>
            <button>
              <Search />
            </button>
            <button>
              <Cart />
            </button>
            <button>
              <Notifications />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
