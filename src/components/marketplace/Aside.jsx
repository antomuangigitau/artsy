import React, { useState, useRef } from 'react';
import search from '../../assets/images/search.png';
import filter from '../../assets/images/filter.png';

import styles from './Aside.module.css';
import TitleProp from './TitleProp';
import { useEffect } from 'react';
import MultiRangeSlider from './MultiRangeSlider';
const nameTags = [
  {
    title: 'Editorials',
  },
  {
    title: 'Fashion',
  },
  {
    title: 'Optics',
  },
  {
    title: 'Art & Museum',
  },
  {
    title: 'Nature',
  },
];

const data = [
  { title: 'By Category', category: 'Category' },
  { title: 'By Artist', category: 'Artist' },
  { title: 'By Price', category: 'Price' },
];

const Aside = () => {
  const [value, setValue] = useState({ min: 100, max: 150 });
  const [name, setName] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [showLinks, setShowLinks] = useState(false);
  const labelContainerRef = useRef(null);
  const labelRef = useRef(null);
  useEffect(() => {
    const linkHeight = labelRef.current.getBoundingClientRect().height;
    console.log(linkHeight);
    if (showLinks) {
      labelContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      labelContainerRef.current.style.height = '0';
    }
  }, [showLinks]);
  return (
    <aside className={styles['aside']}>
      <div className={styles['search__container']}>
        <img src={search} alt="search" />
        <input
          type="text"
          placeholder="search"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles['filter__container']}>
        <img src={filter} alt="filter" />
        <span>Filter</span>
      </div>
      <div className={styles['divider']}></div>
      <div className={styles['props__holder']}>
        <TitleProp
          showLinks={showLinks}
          setShowLinks={setShowLinks}
          title={data[0]}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        >
          <div className={styles.show} ref={labelContainerRef}>
            <div ref={labelRef}>
              {nameTags.map((name) => {
                const { title } = name;
                return (
                  <div className={styles['check__container']} key={title}>
                    <div className={styles['check__box']}>
                      <input type="checkbox" name={title} id={title} />
                    </div>
                    <label htmlFor={title}>{title}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </TitleProp>
      </div>
      {/* <div className={styles['props__holder']}>
        <TitleProp
          title={data[1]}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          showLinks={showLinks}
          setShowLinks={setShowLinks}
        >
          <div className={styles.show} ref={labelContainerRef}>
            <div ref={labelRef}>
              <p>
                ${value.min.toFixed(2)} - ${value.max.toFixed(2)}
              </p>
              <MultiRangeSlider
                min={value.min}
                max={value.max}
                onChange={({ min, max }) => setValue({ min, max })}
              />
            </div>
          </div>
        </TitleProp>
      </div> */}
    </aside>
  );
};

export default Aside;
