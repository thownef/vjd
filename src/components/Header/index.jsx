import React from 'react';
import banner from '../../assets/banner_platform.png';

const Header = () => {
  return (
    <div style={{ width: '100%', marginBottom: '20px' }}>
      <img style={{ width: '100%' }} src={banner} alt='banner' />
    </div>
  );
};

export default Header;
