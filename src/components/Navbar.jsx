import React from 'react';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
  <div className="flex justify-center">
    <div className="flex relative items-center p-5 mt-5 drop-shadow-lg justify-between" style={{ backgroundColor: "#827689", borderRadius: "20px", width: "95vw" }}>
      <a href="/feed" className="flex items-center">
        <img src={logo} alt="logo" className="hypno logo mr-10" />
        <h1 className="anton text-3xl text-white header">
          HYPNODROME
        </h1>
      </a>
      <SearchBar />
    </div>
  </div>
)

export default Navbar;