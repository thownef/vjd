import React from 'react';
import Container from '../../../../components/Container';
import { Col, Row } from 'antd';
import style from './index.module.scss';

const Service = () => {
  return (
    <Container>
      <Row justify={'center'}>
        <h1>ĐĂNG TRƯNG CÔNG TY</h1>
      </Row>
      <Row gutter={[16, 16]} justify={'center'}>
        <Col span={8}>
          <div className={style.box}>
            <i className='far fa-comment-alt'></i>
            <h3>Tư vấn miễn phí 24/7</h3>
          </div>
        </Col>
        <Col span={8}>
          <div className={style.box}>
            <i className='fas fa-print'></i>
            <h3>In trong ngày</h3>
          </div>
        </Col>
        <Col span={8}>
          <div className={style.box}>
            <i className='far fa-money-bill-alt'></i>
            <h3>Tối ưu chi phí</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
