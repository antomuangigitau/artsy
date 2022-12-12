import { images } from '../../data';
import styles from './Flip.module.css';

const Flip = () => {
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
        {images.map((image) => {
          const { id, img } = image;
          return <img key={id} src={img} alt={`Image ${id}`} />;
        })}
      </div>
    </section>
  );
};

export default Flip;
