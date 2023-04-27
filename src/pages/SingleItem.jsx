import React from 'react';
import { Link, useParams } from 'react-router-dom';
const SingleItem = () => {
  const { userId } = useParams();
  console.log(userId);
  //   const item = contents.find((item) => {
  //     return item.id === Number(customerId);
  // });
  return (
    <div>
      <h3>SingleItem</h3>
    </div>
  );
};

export default SingleItem;
