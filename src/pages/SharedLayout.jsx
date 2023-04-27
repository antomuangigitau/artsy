import { Outlet } from 'react-router-dom';
import Navbar from '../components/header/Navbar';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
