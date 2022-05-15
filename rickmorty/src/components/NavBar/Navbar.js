import React from 'react';
import { ReactComponent as Logo } from '../../assets/svgexport-1.svg';
import Search from './Search';
import Header from './Header';
import './style.css';

const Navbar = ({ setSearch, setError }) => {
  return (
    <div className='nav_container'>
      <div className='left'>
        <div className='logo'>
          <Logo />
        </div>
        <Header />
      </div>
      <div className='right'>
        <Search setSearch={setSearch} setError={setError} />
      </div>
    </div>
  );
};

export default Navbar;
