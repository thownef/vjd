import React from 'react';
import style from './index.module.scss';
import { Col, Row } from 'antd';

const Model = () => {
  return (
    <div className={style.member__container}>
      <Row>
        <Col lg={9} md={24} className={style.member__desc}>
          <div className={style.member__image}>
            <img
              src='https://vijaba.com/uploads/img/members/logo/1647828997-1647397913-1647329875-vjp-removebg-preview.png'
              alt=''
            />
          </div>
        </Col>
        <Col lg={15} md={24} className={style.member__business}>
          <h4>BUSINESS</h4>
          <ul className={style.member__jobs}>
            <li className={style.member__jobs_item}>
              IT人材教育・紹介 (ホーチミン・日本)
            </li>
            <li className={style.member__jobs_item}>
              現地のシステム開発部隊立上支援
            </li>
            <li className={style.member__jobs_item}>
              ディジタルトランスフォーメーション支援
            </li>
          </ul>
          <div className='member__company'>
            <h4>Company address</h4>
            <Row>
              {/* <Col span={8} className={style.member__company_img}>
                <img
                  src='https://vijaba.com/uploads/img/members/logo/1647828997-1647397913-1647329875-vjp-removebg-preview.png'
                  alt=''
                />
              </Col> */}
              <Col span={24} className={style.member__company_content}>
                <ul>
                  <h5>Address</h5>
                  <li>
                    Nha 8, Lo 45F, Duong so 13, Cong vien phan mem Quang Trung,
                    Phuong Tan Chanh Hiep, Quan 12
                  </li>
                </ul>
                <ul>
                  <h5>Phone / Fax</h5>
                  <li>(+84) 02822.474.383</li>
                </ul>
                <ul>
                  <h5>Website</h5>
                  <a className={style.website} href='/'>
                    https://vj-partner.com
                  </a>
                </ul>
              </Col>
            </Row>
          </div>
          <div className={style.member__business_background}>
            <img src='https://vijaba.com/uploads/img/members/city.png' alt='' />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Model;
