import React from 'react';
import { ReactComponent as Logo } from '../../assets/svgexport-1.svg';
import Search from '../Search/Search';
import Header from './Header';
import './style.css';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='left'>
        <Logo />
        <Header />
      </div>
      <div className='right'>
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
