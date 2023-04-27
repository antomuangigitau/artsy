import React from 'react';
import Aside from '../components/marketplace/Aside/Aside';
import Profile from '../components/marketplace/Profile/Profile';

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
