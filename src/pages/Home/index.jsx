import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Benefit from './components/Benefit';
import Company from './components/Company';
import Donors from './components/Donors';
import Service from './components/Service';
import TimeAddress from './components/TimeAddress';
import { FloatButton } from 'antd';
import style from './index.module.scss';

const Home = () => {
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
      <div className={style.backtop}>
        <FloatButton.BackTop />
      </div>
    </>
  );
};

export default Home;
