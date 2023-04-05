import Container from '../../../../components/Container';
import { Card, Col, Row } from 'antd';
import style from './index.module.scss';

const Package = () => {
  return (
    <Container>
      <Row justify={'center'}>
        <h1>CÁC DỊCH VỤ CHÍNH</h1>
      </Row>
      <Row gutter={[32, 32]} justify={'center'}>
        <Col span={12}>
          <Card
            hoverable
            cover={
              <img
                alt='example'
                src='https://vj-digital.com/uploads/img/service/1-570x380.png'
              />
            }
          >
            <div className={style.content}>
              <h3>Phòng công nghệ thuê ngoài SME</h3>
              <p>
                Hỗ trợ khách hàng chuyển đổi số như 1 phòng ban Công nghệ nội bộ
                từ công đoạn phân tích, tư vấn, đến triển khai, vận hành.
              </p>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            hoverable
            cover={
              <img
                alt='example'
                src='https://vj-digital.com/uploads/img/service/2-570x380.png'
              />
            }
          >
            <div className={style.content}>
              <h3>Cung ứng nhân sự</h3>
              <p>
                Cung cấp nhân sự IT gia công công đoạn lập trình cho các dự án
                phục vụ thị trường Nhật
              </p>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            hoverable
            cover={
              <img
                alt='example'
                src='https://vj-digital.com/uploads/img/service/3-570x380.png'
              />
            }
          >
            <div className={style.content}>
              <h3>Xây dựng phần mềm quản lý nghiệp vụ</h3>
              <p>
                Tư vấn, thiết kế và xây dựng phần mềm hỗ trợ quản lý nghiệp vụ
                theo đặc thù nghiệp vụ của khách hàng
              </p>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            hoverable
            cover={
              <img
                alt='example'
                src='https://vj-digital.com/uploads/img/service/4-570x380.png'
              />
            }
          >
            <div className={style.content}>
              <h3>Thiết kế web bán hàng/Marketing</h3>
              <p>
                Tư vấn, thiết kế web bán hàng online có tích hợp các tính năng
                hỗ trợ marketing như Email, tin nhắn, chatbot
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Package;
