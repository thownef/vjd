import React from 'react';
import Container from '../../../../components/Container';
import { Col, Row } from 'antd';
import style from './index.module.scss';
import useTimer from './hooks/useTimer';

const TimeAddress = () => {
  const { days, hours, minutes, seconds } = useTimer('2023-06-08T23:59:59');

  return (
    <div className={style.wrapper}>
      <Container>
        <Row
          style={{
            marginBottom: '30px',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Col md={8} sm={24} className={style.timeAddress__container}>
            <Row>
              <Col span={5} className={style.timeAddress__icon}>
                <img
                  src='https://bm3.bnihcmc6.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faward.b74daf12.png&w=64&q=75'
                  alt=''
                />
              </Col>
              <Col span={19} className={style.timeAddress__info}>
                <h3>THỜI GIAN</h3>
                <p>07h00 - 17h00, Thứ Năm, 11/08/2022</p>
                <p>07h00 - 21h00, Thứ Sáu, 12/08/2022</p>
              </Col>
            </Row>
          </Col>
          <Col
            md={8}
            sm={24}
            className={style.timeAddress__container}
            style={{
              borderRight: '2px solid #4e6e6f',
              borderLeft: '2px solid #4e6e6f',
            }}
          >
            <Row>
              <Col span={5} className={style.timeAddress__icon}>
                <img
                  src='https://bm3.bnihcmc6.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flocation.9a5ecc41.png&w=640&q=75'
                  alt=''
                />
              </Col>
              <Col span={19} className={style.timeAddress__info}>
                <h3>ĐỊA ĐIỂM</h3>
                <p>Trung tâm hội nghị ADORA Nguyễn Kiệm, TP. Hồ Chí Minh</p>
              </Col>
            </Row>
          </Col>
          <Col md={8} sm={24} className={style.timeAddress__container}>
            <Row>
              <Col span={5} className={style.timeAddress__icon}>
                <img
                  src='https://bm3.bnihcmc6.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbooks-stack-of-three.fef6b428.png&w=64&q=75'
                  alt=''
                />
              </Col>
              <Col span={19} className={style.timeAddress__info}>
                <h3>Facebook Event</h3>
                <p>07h00 - 17h00, Thứ Năm, 11/08/2022</p>
                <p>07h00 - 21h00, Thứ Sáu, 12/08/2022</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col className='gutter-row' md={6} xs={12}>
            <div className={style.timeAddress__countdown}>
              <h1>{days}</h1>
              <span>Ngày</span>
            </div>
          </Col>
          <Col className='gutter-row' md={6} xs={12}>
            <div className={style.timeAddress__countdown}>
              <h1>{hours}</h1>
              <span>Giờ</span>
            </div>
          </Col>
          <Col className='gutter-row' md={6} xs={12}>
            <div className={style.timeAddress__countdown}>
              <h1>{minutes}</h1>
              <span>Phút</span>
            </div>
          </Col>
          <Col className='gutter-row' md={6} xs={12}>
            <div className={style.timeAddress__countdown}>
              <h1>{seconds}</h1>
              <span>Giây</span>
            </div>
          </Col>
        </Row>
        <a className={style.linklogin} href='/'>
          ĐĂNG KÝ THAM GIA
        </a>
      </Container>
    </div>
  );
};

export default TimeAddress;
