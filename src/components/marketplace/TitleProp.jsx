import styles from './TitleProp.module.css';
import titleArrow from '../../assets/images/titleArrow.png';
const TitleProp = ({
  title,
  setCurrentCategory,
  currentCategory,
  showLinks,
  setShowLinks,
  children,
}) => {
  const toggleArrow = () => {
    setCurrentCategory(title.category);
    if (title.category === currentCategory) {
      setShowLinks(!showLinks);
    }
  };

  return (
    <article className={styles['title']} onClick={toggleArrow}>
      <div className={styles['title__header']}>
        <h4>{title.title}</h4>
        <img
          src={titleArrow}
          alt={title.category}
          style={{
            transform:
              title.category === currentCategory
                ? 'rotate(180deg)'
                : 'rotate(0deg)',
            transition: 'transform 300ms ease-in-out',
          }}
        />
      </div>
      {children}
    </article>
  );
};

export default TitleProp;

// import styles from './TitleProp.module.css';

// const TitleProp = ({ img, title, close, showLinks }) => {
//   return (
//     <div className={styles['title']} onClick={() => inne}>
//       <h4>{title}</h4>
//       <img
//         style={{ transform: showLinks ? 'rotate(180deg)' : 'rotate(0deg)' }}
//         src={img}
//         alt={title}
//       />
//     </div>
//   );
// };

// export default TitleProp;
