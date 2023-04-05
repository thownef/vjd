import React from 'react';
import Container from '../Container';
import './index.scss';
import { Col, Row } from 'antd';

const Footer = () => {
  return (
    <div className='container'>
      <Container>
        <Row>
          <Col span={8}>
            <img
              src='https://vj-partner.com/uploads/img/general/1643360241-logopng.png'
              alt=''
            />
            <p>
              質の高いIT人材の育成と提供により、日本のIT市場の人材不足が深刻なプロジェクトを支援します。これにより、ベトナム人の技術力やスキルレベルを迅速に向上させ、ベトナムと日本の発展に貢献します。
            </p>
          </Col>
          <Col span={4}>dfgdf</Col>
          <Col span={6}>dfg</Col>
          <Col span={6}>dfgfdg</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
