import React from 'react';
import Aside from '../components/marketplace/Aside';
import Profile from '../components/marketplace/Profile';

const Marketplace = () => {
  return (
    <main>
      <section className="marketplace">
        <Aside />
        <Profile />
      </section>
    </main>
  );
};

export default Marketplace;
