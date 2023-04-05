import React from 'react';
import Package from './components/Package';
import style from './index.module.scss';
import { Checkbox, Col, Row } from 'antd';
import Service from './components/Service';
import Team from './components/Team';
import Customer from './components/Customer';
import Container from '../../components/Container';
import Introduce from './components/Introduce';

const Profile = () => {
  return (
    <>
      <div className={style.container}>
        <Row justify={'space-between'}>
          <Col>
            <img
              className={style.banner}
              src='https://vj-partner.com/uploads/img/general/1638966072-logo-VJP-[306x75].png'
              alt=''
            />
          </Col>
          <Col className={style.category}>
            <span>Category: Industry</span>
          </Col>
          <Col>
            <img
              className={style.logo}
              src='https://investment-day-assets.sgp1.digitaloceanspaces.com/ybahcm/2021/03/23214250/Logo-YBA-2.png'
              alt=''
            />
          </Col>
        </Row>
        <Row className={style.content}>
          <Col span={14}>
            <h3 className={style.title}>VIET JAPAN PARTNER</h3>
            <Row>
              <Col span={12}>
                <Row align={'middle'} className={style.content__item}>
                  <span>Estalishment: </span>
                  <p>Nov, 2015</p>
                </Row>
              </Col>
              <Col span={12}>
                <Row align={'middle'} className={style.content__item}>
                  <span>Employers: </span>
                  <p>30</p>
                </Row>
              </Col>
            </Row>
            <Row align={'middle'} className={style.content__item}>
              <span>Capital: </span>
              <p>$ 100,000</p>
            </Row>
            <p className={style.addresss}>
              Room 22, House 8, Road 13, Quang Trung Software City, Tan Chanh
              Hiep Ward, 12 District, HCM City, Vietnam
            </p>
            <Row className={style.flag}>
              <img
                src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png'
                alt=''
              />
              <img
                src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png'
                alt=''
              />
              <img
                src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png'
                alt=''
              />
              <img
                src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png'
                alt=''
              />
            </Row>
          </Col>
          <Col span={10}>
            <div>Needs</div>
            <div className={style.customer}>
              <div>Find customer</div>
              <div className={style.customer__item}>Find customer</div>
              <div className={style.customer__item}>Find customer</div>
              <div className={style.customer__item}>Find customer</div>
              <div className={style.customer__item}>Find customer</div>
            </div>
          </Col>
        </Row>
      </div>

      <Introduce />
      <Package />
      <Service />
      <Team />
      <Customer />
      <Container>
        <Row justify={'center'} className={style.checkbox}>
          <h1>LỊCH CÓ THỂ HẸN BOOK</h1>
        </Row>
        <Row justify={'center'} className={style.checkbox}>
          <span>Slot 1</span>
          <span style={{ margin: '0 10px' }}>
            <Checkbox />
          </span>
          <span>0-15</span>
        </Row>
        <Row justify={'center'} className={style.checkbox}>
          <span>Slot 1</span>
          <span style={{ margin: '0 10px' }}>
            <Checkbox />
          </span>
          <span>0-15</span>
        </Row>
        <Row justify={'center'} className={style.checkbox}>
          <span>Slot 1</span>
          <span style={{ margin: '0 10px' }}>
            <Checkbox />
          </span>
          <span>0-15</span>
        </Row>
        <Row justify={'center'} className={style.checkbox}>
          <span>Slot 1</span>
          <span style={{ margin: '0 10px' }}>
            <Checkbox />
          </span>
          <span>0-15</span>
        </Row>
        <Row justify={'center'} className={style.checkbox}>
          <span>Slot 1</span>
          <span style={{ margin: '0 10px' }}>
            <Checkbox />
          </span>
          <span>0-15</span>
        </Row>
        <Row justify={'center'} className={style.checkbox}>
          <span>Slot 1</span>
          <span style={{ margin: '0 10px' }}>
            <Checkbox />
          </span>
          <span>0-15</span>
        </Row>
        <Row justify={'center'} className={style.checkbox}>
          <span>Slot 1</span>
          <span style={{ margin: '0 10px' }}>
            <Checkbox />
          </span>
          <span>0-15</span>
        </Row>
        <Row justify={'center'} className={style.checkbox}>
          <span>Slot 1</span>
          <span style={{ margin: '0 10px' }}>
            <Checkbox />
          </span>
          <span>0-15</span>
        </Row>
        <Row justify={'center'} className={style.checkbox}>
          <button className={style.button}>Book</button>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
