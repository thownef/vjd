import { Col, Row } from 'antd';
import Container from '../../../../components/Container';
import style from './index.module.scss';

const Service = () => {
  return (
    <Container>
      <div className={style.wrapper}>
        <Row justify={'center'}>
          <h1>CÁC NHÓM DOANH NGHIỆP THAM DỰ</h1>
        </Row>
        <Row gutter={[32, 32]}>
          <Col lg={6} md={12}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span className='test'>
                  <i className='fas fa-building'></i>
                </span>
              </div>
              <div className={style.service__content}>
                <h3 className={style.title}>進出支援</h3>
                <p className={style.para}>
                  日本投資家向けの法務・会計・販売支援など
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span className='test'>
                  <i className='fab fa-dev'></i>
                </span>
              </div>
              <div className={style.service__content}>
                <h3 className={style.title}>システム開発</h3>
                <p className={style.para}>
                  システム導入・WEB・アプリケーション開発・DXサービス
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span className='test'>
                  <i className='fas fa-user'></i>
                </span>
              </div>
              <div className={style.service__content}>
                <h3 className={style.title}>人材紹介</h3>
                <p className={style.para}>
                  日本語できるベトナム現地や在日の人材を紹介
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span className='test'>
                  <i className='fas fa-book-open'></i>
                </span>
              </div>
              <div className={style.service__content}>
                <h3 className={style.title}>日本語教育</h3>
                <p className={style.para}>
                  子供から大人までの日本語教育センターを持つ{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span className='test'>
                  <i className='fas fa-plane-departure'></i>
                </span>
              </div>
              <div className={style.service__content}>
                <h3 className={style.title}>観光</h3>
                <p className={style.para}>
                  日本語対応できる日越観光・レンターカーサービス{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span className='test'>
                  <i className='fas fa-cut'></i>
                </span>
              </div>
              <div className={style.service__content}>
                <h3 className={style.title}>製造加工</h3>
                <p className={style.para}>
                  プラスチックやCNC付属品やジュエリーなどの加工
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span className='test'>
                  <i className='fas fa-tshirt'></i>
                </span>
              </div>
              <div className={style.service__content}>
                <h3 className={style.title}>縫製</h3>
                <p className={style.para}>
                  国内外向け衣服のデザイン・生産サービス{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span className='test'>
                  <i className='fas fa-industry'></i>
                </span>
              </div>
              <div className={style.service__content}>
                <h3 className={style.title}>その他</h3>
                <p className={style.para}>
                  工業地帯での支援、水産、農産のコンサル・提供など
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Service;
