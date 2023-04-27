import React from 'react';
import { ArrowMarket } from '../../../utils/SVG';
import styles from './Profile.module.css';
import Profileimg from './ProfileImg/Profileimg';

const Profile = () => {
  return (
    <main className={styles.main}>
      <div className={styles['search__container']}>
        <form className={styles['sorts']}>
          <p className={styles['see']}>See 1-6 of 15 results</p>
          <div className={styles['sort_by']}>
            <label htmlFor="sort">Sort by</label>
            <ArrowMarket />
          </div>
        </form>
      </div>
      <Profileimg />
    </main>
  );
};

export default Profile;
