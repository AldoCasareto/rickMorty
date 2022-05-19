import React from 'react';
import { ReactComponent as Logo } from '../../assets/svgexport-1.svg';
import Search from './Search';
import Header from './Header';
import './style.css';
import ShortList from './ShortList';

const Navbar = ({ setSearch, setError, handleShortlist }) => {
  return (
    <header className='nav_container'>
      <div className='left'>
        <div className='logo'>
          <Logo />
        </div>
        <Header />
      </div>
      <div className='right'>
        <div>
          <ShortList handleShortlist={handleShortlist} />
        </div>
        <Search setSearch={setSearch} setError={setError} />
      </div>
    </header>
  );
};

export default Navbar;
