import { Outlet } from 'react-router-dom';
import Navbar from '../components/header/Navbar';
import SmallNav from '../components/header/SmallNav';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <SmallNav />
      <Outlet />
    </>
  );
};

export default SharedLayout;
