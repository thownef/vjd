import Header from '../../components/Header';
import Benefit from './components/Benefit';
import Company from './components/Company';
import Donors from './components/Donors';
import Service from './components/Service';
import TimeAddress from './components/TimeAddress';
import { FloatButton } from 'antd';

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
      <FloatButton.BackTop />
    </>
  );
};

export default Home;
