import React, { useCallback, useEffect, useState, useRef } from 'react';
// import PropTypes from "prop-types";
import styles from './MultiRangeSlider.module.css';

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={styles['thumb'] + ' ' + styles['thumb--left']}
        style={{ zIndex: minVal > max - 100 && '5' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={styles['thumb'] + ' ' + styles['thumb--right']}
      />
      <div className={styles['slider']}>
        <div className={styles['slider__track']} />
        <div ref={range} className={styles['slider__range']} />
        {/* <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div> */}
      </div>
    </div>
  );
};

export default MultiRangeSlider;
