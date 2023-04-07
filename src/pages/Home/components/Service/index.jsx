import { Col, Row } from 'antd';
import Container from '../../../../components/Container';
import style from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faBuilding,
  faIndustry,
  faPlaneDeparture,
  faScissors,
  faShirt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  return (
    <Container>
      <Row justify={'center'}>
        <h1 className={style.service__title}>CÁC NHÓM DOANH NGHIỆP THAM DỰ</h1>
      </Row>
      <div className={style.wrapper}>
        <Row gutter={[32, 32]}>
          <Col xl={6} lg={12} md={12} xs={24}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span>
                  <FontAwesomeIcon icon={faBuilding} />
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
          <Col xl={6} lg={12} md={12} xs={24}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span>
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
          <Col xl={6} lg={12} md={12} xs={24}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span>
                  <FontAwesomeIcon icon={faUser} />
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
          <Col xl={6} lg={12} md={12} xs={24}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span>
                  <FontAwesomeIcon icon={faBookOpen} />
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
          <Col xl={6} lg={12} md={12} xs={24}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span>
                  <FontAwesomeIcon icon={faPlaneDeparture} />
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
          <Col xl={6} lg={12} md={12} xs={24}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span>
                  <FontAwesomeIcon icon={faScissors} />
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
          <Col xl={6} lg={12} md={12} xs={24}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span>
                  <FontAwesomeIcon icon={faShirt} />
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
          <Col xl={6} lg={12} md={12} xs={24}>
            <div className={style.service__box}>
              <div className={style.icon}>
                <span>
                  <FontAwesomeIcon icon={faIndustry} />
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
