import React from 'react';
import Container from '../Container';
import './index.scss';
import { Col, Row } from 'antd';

const Footer = () => {
  return (
    <div className='container'>
      <Container>
        <Row gutter={24}>
          <Col span={8} className='widget'>
            <img
              src='https://vj-partner.com/uploads/img/general/1643360241-logopng.png'
              alt=''
            />
            <p>
              質の高いIT人材の育成と提供により、日本のIT市場の人材不足が深刻なプロジェクトを支援します。これにより、ベトナム人の技術力やスキルレベルを迅速に向上させ、ベトナムと日本の発展に貢献します。
            </p>
            <ul className='social__list'>
              <li>
                <a href='https://www.facebook.com/vjpcom'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
              <li>
                <a href='https://goo.gl/maps/wko55dwLpgc9e74H6'>
                  <i className='fab fa-google-plus-g'></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col span={4} className='footer__list'>
            <h5>メニュー</h5>
            <ul>
              <li>
                <a href='#home'>ホームページ</a>
              </li>
              <li>
                <a href='#about'>企業理念</a>
              </li>{' '}
              <li>
                <a href='#service'>サービス</a>
              </li>{' '}
              <li>
                <a href='#team'>チーム</a>
              </li>{' '}
              <li>
                <a href='#contact'>お問い合わせ</a>
              </li>{' '}
              <li>
                <a href='https://v-recruit.jp/'>V-リクルート</a>
              </li>
            </ul>
          </Col>
          <Col span={6}>dfg</Col>
          <Col span={6}>dfgfdg</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
