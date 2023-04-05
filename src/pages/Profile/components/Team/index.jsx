import React from 'react';
import { Col, Row } from 'antd';
import style from './index.module.scss';

const Team = () => {
  return (
    <div className={style.wrapper}>
      <Row justify={'center'}>
        <h1>NHÂN SỰ CHỦ CHỐT</h1>
      </Row>
      <Row justify={'center'}>
        <Col span={8} className={style.container}>
          <div className={style.box}>
            <img
              src='https://vj-digital.com/uploads/img/teams/1646971511-thang.jpg'
              alt=''
            />
            <div className={style.content}>
              <h3>Võ Đức Thắng</h3>
              <h6>
                President <br /> Chief Executive Officer
              </h6>
            </div>
          </div>
        </Col>
        <Col span={8} className={style.container}>
          <div className={style.box}>
            <img
              src='https://vj-digital.com/uploads/img/teams/1647074520-Thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn.jpg'
              alt=''
            />
            <div className={style.content}>
              <h3>Yokoyama Kazuhisa</h3>
              <h6>
                Co-founder <br /> Advisor
              </h6>
            </div>
          </div>
        </Col>
        <Col span={8} className={style.container}>
          <div className={style.box}>
            <img
              src='https://vj-digital.com/uploads/img/teams/1659949198-dang-vo-phat-tai.png'
              alt=''
            />
            <div className={style.content}>
              <h3>Đặng Võ Phát Tài</h3>
              <h6>
                Co-founder <br /> Chief Resources Officer
              </h6>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
