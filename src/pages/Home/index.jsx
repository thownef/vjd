import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Benefit from './components/Benefit';
import Company from './components/Company';
import Donors from './components/Donors';
import Service from './components/Service';
import TimeAddress from './components/TimeAddress';
import { BackTop, FloatButton } from 'antd';
import style from './index.module.scss';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset !== 0 ? true : false);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <Header />
      <Benefit />
      <TimeAddress />
      <Donors />
      <Service />
      <Company title='NHẬT BẢN' />
      <Company title='VIỆT NAM' />
      <Footer />
      <div className={isScrolled ? style.backtop : style.hidden}>
        <BackTop />
        <span className={style.animation}></span>
      </div>
    </>
  );
};

export default Home;
