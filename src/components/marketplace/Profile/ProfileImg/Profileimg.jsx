import React, { useState } from 'react';
import { marketPics } from '../../../../data';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Profileimg = () => {
  const [numToShow, setNumToShow] = useState(9);
  const [numToAdd, setNumToAdd] = useState(6);

  const handleShowMore = () => {
    setNumToShow(numToShow + numToAdd);
  };
  return (
    <Wrapper className="main__profile">
      <div className="articles">
        {marketPics.slice(0, numToShow).map((items) => {
          const { id, img, title } = items;
          return (
            <article key={id} className="container">
              <Link to={`/marketplace/${id}`}>
                <img src={img} alt={title} />
              </Link>
              <h4>{title}</h4>
              <p>$3.90</p>
            </article>
          );
        })}
      </div>
      {numToShow < marketPics.length && (
        <div className="show-more">
          <button onClick={handleShowMore}>Show more</button>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  font-family: 'Satoshi', sans-serif;
  .articles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 53px;
    row-gap: 42px;

    .container {
      background-color: #fff;
      box-shadow: 0px 34px 68px rgba(217, 225, 244, 0.36);
      border-radius: 15px;
      padding: 20px 14px 7px 14px;
      width: 269px;
    }
    h4 {
      font-size: 22px;
      font-weight: 400;
      line-height: 35px;
      margin-top: 10px;
    }
    p {
      font-size: 28px;
      font-weight: 700;
      line-height: 44px;
    }
    img {
      width: 100%;
    }
  }
  .show-more {
    display: flex;
    justify-content: center;
  }

  button {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 41px;
    padding: 16px 0;
    width: 249px;
    border: 1px solid #333333;
    border-radius: 10px;
    margin-top: 167px;
    margin-bottom: 299px;
  }
`;

export default Profileimg;

{
  /* <Wrapper onClick={() => setSeeMore(!seeMore)}>
        {seeMore === false ? (
          <article className={styles.main}>
            <div className={styles.articles}>
              {marketPics.slice(9, 12).map((items) => {
                const { id, img, title } = items;
                return (
                  <article key={id} className={styles.container}>
                    <Link to={`/marketplace/${id}`}>
                      <img src={img} alt={title} />
                    </Link>
                    <h4>{title}</h4>
                    <p>$3.90</p>
                  </article>
                );
              })}
            </div>
          </article>
        ) : (
          'See more'
        )}
      </Wrapper> */
}

// {seeMore === false ? (
//   <Wrapper>
//     <button onClick={() => setSeeMore(!seeMore)}>See more</button>
//   </Wrapper>
// ) : (
//   <div className={styles.articles}>
//     {marketPics.slice(9, 12).map((items) => {
//       const { id, img, title } = items;
//       return (
//         <article key={id} className={styles.container}>
//           <Link to={`/marketplace/${id}`}>
//             <img src={img} alt={title} />
//           </Link>
//           <h4>{title}</h4>
//           <p>$3.90</p>
//         </article>
//       );
//     })}
//   </div>
// )}
