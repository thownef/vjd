import React from 'react';
import Container from '../Container';
import style from './index.module.scss';
import { Col, Row } from 'antd';

const Footer = () => {
  return (
    <div className={style.container}>
      <Container>
        <Row gutter={24}>
          <Col span={8} className={style.widget}>
            <img
              src='https://vj-partner.com/uploads/img/general/1643360241-logopng.png'
              alt=''
            />
            <p>
              質の高いIT人材の育成と提供により、日本のIT市場の人材不足が深刻なプロジェクトを支援します。これにより、ベトナム人の技術力やスキルレベルを迅速に向上させ、ベトナムと日本の発展に貢献します。
            </p>
            <ul className={style.social__list}>
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
          <Col span={6} className={style.footer__list}>
            <h5>メニュー</h5>
            <ul>
              <li>
                <a href='#home'>ホームページ</a>
              </li>
              <li>
                <a href='#about'>企業理念</a>
              </li>
              <li>
                <a href='#service'>サービス</a>
              </li>
              <li>
                <a href='#team'>チーム</a>
              </li>
              <li>
                <a href='#contact'>お問い合わせ</a>
              </li>
              <li>
                <a href='https://v-recruit.jp/'>V-リクルート</a>
              </li>
            </ul>
          </Col>
          {/* <Col span={4} className={style.footer__list}>
            <h5>ヘルプ</h5>
            <ul>
              <li>
                <a href='https://v-recruit.jp/'>開発支援実績</a>
              </li>
            </ul>
          </Col> */}
          <Col span={10} className={style.footer__list}>
            <h5>連絡先情報</h5>
            <p>
              <i class='fas fa-map-marker-alt mrr-10'></i>
              Room 22, House 8, Quang Trung City Software City, District 12,
              HCMC, Viet Nam
            </p>
            <p>
              <i class='fas fa-phone mrr-10'></i>
              (+84) 028 7303 8939
            </p>
            <p>
              <i class='fas fa-envelope mrr-10'></i>
              contact@vj-partner.com
            </p>
          </Col>
        </Row>
      </Container>
      <div className={style.footer__bottom}>
        <span>
          著作権 © 2022 VIET JAPAN PARTNER - 無断複写・転載を禁じます。
        </span>
      </div>
    </div>
  );
};

export default Footer;
