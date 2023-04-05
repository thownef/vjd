import React from 'react';
import Container from '../../../../components/Container';
import { Col, Row } from 'antd';
import style from './index.module.scss';

const Customer = () => {
  return (
    <Container>
      <Row justify={'center'}>
        <h1>-KHÁCH HÀNG-</h1>
      </Row>
      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col span={3} className={style.container}>
          <img
            className={style.logo}
            src='https://bm3.bnihcmc6.com/_next/image?url=%2Fvjp.jpg&w=640&q=75'
            alt=''
          />
          <span className={style.tooltiptext}>Company</span>
        </Col>
        <Col span={3} className={style.container}>
          <img
            className={style.logo}
            src='https://bm3.bnihcmc6.com/_next/image?url=%2Fvjp.jpg&w=640&q=75'
            alt=''
          />
          <span className={style.tooltiptext}>Company</span>
        </Col>
        <Col span={3} className={style.container}>
          <img
            className={style.logo}
            src='https://bm3.bnihcmc6.com/_next/image?url=%2Fvjp.jpg&w=640&q=75'
            alt=''
          />
          <span className={style.tooltiptext}>Company</span>
        </Col>
        <Col span={3} className={style.container}>
          <img
            className={style.logo}
            src='https://bm3.bnihcmc6.com/_next/image?url=%2Fvjp.jpg&w=640&q=75'
            alt=''
          />
          <span className={style.tooltiptext}>Company</span>
        </Col>
        <Col span={3} className={style.container}>
          <img
            className={style.logo}
            src='https://bm3.bnihcmc6.com/_next/image?url=%2Fvjp.jpg&w=640&q=75'
            alt=''
          />
          <span className={style.tooltiptext}>Company</span>
        </Col>
        <Col span={3} className={style.container}>
          <img
            className={style.logo}
            src='https://bm3.bnihcmc6.com/_next/image?url=%2Fvjp.jpg&w=640&q=75'
            alt=''
          />
          <span className={style.tooltiptext}>Company</span>
        </Col>
        <Col span={3} className={style.container}>
          <img
            className={style.logo}
            src='https://bm3.bnihcmc6.com/_next/image?url=%2Fvjp.jpg&w=640&q=75'
            alt=''
          />
          <span className={style.tooltiptext}>Company</span>
        </Col>
        <Col span={3} className={style.container}>
          <img
            className={style.logo}
            src='https://bm3.bnihcmc6.com/_next/image?url=%2Fvjp.jpg&w=640&q=75'
            alt=''
          />
          <span className={style.tooltiptext}>Company</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Customer;
