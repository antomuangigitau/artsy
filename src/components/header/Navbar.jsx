import { pages } from '../../data';
import { Link } from 'react-router-dom';
import { Cart, Notifications, Search } from '../../icons';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <h3>ARTSY.</h3>
        <ul className={styles.links}>
          {pages.map((link) => {
            const { id, page, path } = link;
            return (
              <Link className={styles.link} key={id} to={path}>
                {page}
              </Link>
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
  );
};

export default Navbar;
