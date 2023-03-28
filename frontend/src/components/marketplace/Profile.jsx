import React from 'react';
import styles from './Profile.module.css';
const Profile = () => {
  return (
    <main className={styles.main}>
      <div className={styles['search__container']}>
        <form className="sort">
          <input type="text" placeholder="See 1-6 of 15 results" />
          <label htmlFor="sort">sort by</label>
          <select name="sort" id="">
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
          </select>
        </form>
      </div>
    </main>
  );
};

export default Profile;
