import React, { useState } from 'react';
import Container from '../../../../components/Container';
import { Col, Modal, Row } from 'antd';
import style from './index.module.scss';
import './index.css';
import Model from '../../../../components/Model';

const Donors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <Row justify={'center'} style={{ marginTop: '10px' }}>
        <h1 className={style.donor__title}>
          NHÀ TÀI TRỢ
          <span>BUSINESS MATCHING 2023</span>
        </h1>
      </Row>
      <Row gutter={[32, 32]}>
        <Col md={6} xs={12}>
          <div className={style.donor__container}>
            <img
              onClick={showModal}
              src='https://bm3.bnihcmc6.com/_next/image?url=%2Fdonor1.jpg&w=640&q=75'
              alt=''
            />
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className={style.donor__container}>
            <img
              onClick={showModal}
              src='https://bm3.bnihcmc6.com/_next/image?url=%2Fvjp.jpg&w=640&q=75'
              alt=''
            />
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className={style.donor__container}>
            <img
              onClick={showModal}
              src='https://bm3.bnihcmc6.com/_next/image?url=%2Fbachvuong.jpg&w=640&q=75'
              alt=''
            />
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className={style.donor__container}>
            <img
              onClick={showModal}
              src='https://bm3.bnihcmc6.com/_next/image?url=%2Fmarico.png&w=640&q=75'
              alt=''
            />
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className={style.donor__container}>
            <img
              onClick={showModal}
              src='https://bm3.bnihcmc6.com/_next/image?url=%2Ftupperware.jpeg&w=640&q=75'
              alt=''
            />
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className={style.donor__container}>
            <img
              onClick={showModal}
              src='https://bm3.bnihcmc6.com/_next/image?url=%2FCA.jpg&w=640&q=75'
              alt=''
            />
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className={style.donor__container}>
            <img
              onClick={showModal}
              src='https://bm3.bnihcmc6.com/_next/image?url=%2F1.NK%20A%20AU.jpg&w=640&q=75'
              alt=''
            />
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className={style.donor__container}>
            <img
              onClick={showModal}
              src='https://bm3.bnihcmc6.com/_next/image?url=%2F2.KHAM%20PK%20PHUC%20THIEN.png&w=640&q=75'
              alt=''
            />
          </div>
        </Col>
      </Row>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={750}
        centered
      >
        <Model />
      </Modal>
    </Container>
  );
};

export default Donors;
