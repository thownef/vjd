import React from 'react';
import Container from '../../../../components/Container';
import { Col, Row } from 'antd';
import style from './index.module.scss';
import { COMPANY } from '../../../../mock/dummyData';

const Customer = () => {
  return (
    <Container>
      <Row justify={'center'}>
        <h1>-KHÁCH HÀNG-</h1>
      </Row>
      <Row gutter={16}>
        {COMPANY.map((item) => (
          <Col span={3} className={style.container} key={item.name}>
            <img className={style.logo} src={item.logo} alt='' />
            <span className={style.tooltiptext}>{item.name}</span>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Customer;
