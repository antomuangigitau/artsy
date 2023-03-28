import styles from './Flip.module.css';
import { images } from '../../data';
import { useState, useEffect } from 'react';
const Flip = () => {
  const [pics, setPics] = useState(images);
  const [animate, setAnimate] = useState(true);
  function shuffle(arrayPics) {
    setAnimate(false);
    let array = [...arrayPics];
    let currentIndex = array.length,
      randomIndex = null;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  useEffect(() => {
    //Shuffling the array every 5 seconds
    setAnimate(true);
    const interval = setInterval(() => {
      setPics((currentItems) => shuffle(currentItems));
    }, 5000);
    setTimeout(() => setAnimate(false), 1500);
    return () => clearInterval(interval);
  }, [pics]);
  return (
    <section>
      <div className={styles.flip}>
        <h3>Photography is poetry & beautiful untold stories</h3>
        <p>
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <div className={styles['images']}>
        {pics.map((pic) => {
          const { id, img } = pic;
          return (
            <div
              key={id}
              className={`${
                animate ? styles['imgs'] + ' ' + styles['pic'] : styles['imgs']
              }`}
            >
              <img src={img} alt={`image ${id}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Flip;
