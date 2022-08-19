import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
  
};

function Header(props) {
  return (
    <Header>
      <div className='logo'>
        <img src="" alt="LOGO" />
      </div>
      <ul className='navigation'>
        <li>phim lẻ</li>
        <li>phim bộ</li>
        <li>xu hướng</li>
        <li>hoạt hình</li>
      </ul>
      <div className='search'>
        <input type="text" placeholder='nhap ten phim' />
      </div>
    </Header>
  );
}

export default Header;