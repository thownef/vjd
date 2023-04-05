import { Card, Col, Row } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import style from './index.module.scss';
import Container from '../../../../components/Container';
import ReadMore from '../../../../components/ReadMore/ReadMore';

const Benefit = () => {
  return (
    <Container>
      <h3 className={style.benefit__title}>
        NHỮNG LỢI ÍCH KHI THAM GIA <span>BUSINESS MATCHING</span>
      </h3>
      <Row gutter={16}>
        <Col className='gutter-row' xs={24} lg={8}>
          <Card
            hoverable
            className={style['benefit__card--item']}
            cover={
              <img
                alt='example'
                src='https://bm3.bnihcmc6.com/_next/image?url=%2Fketnoi.jpg&w=1920&q=75'
              />
            }
          >
            <h3>
              <span>
                <CaretRightOutlined />
              </span>
              KẾT NỐI KINH DOANH
            </h3>
            <ReadMore>
              Giúp chủ doanh nghiệp quảng bá thương hiệu, trao đổi giao thương
              và kết nối các cơ hội hợp tác kinh doanh trong cộng đồng CEO BNI
              đồng thời kiến tạo thương hiệu cá nhân cho Chủ doanh nghiệp - Bí
              quyết để sở hữu nguồn Marketing vô hạn.
            </ReadMore>
          </Card>
        </Col>
        <Col className='gutter-row' xs={24} lg={8}>
          <Card
            hoverable
            className={style['benefit__card--item']}
            cover={
              <img
                alt='example'
                src='https://bm3.bnihcmc6.com/_next/image?url=%2Fdonghanh2.jpg&w=1920&q=75'
              />
            }
          >
            <h3>
              <span>
                <CaretRightOutlined />
              </span>
              ĐỒNG HÀNH
            </h3>
            <ReadMore>
              Chỉ có tại các Chapter thuộc vùng BNI HCM Central 6. Chủ doanh
              nghiệp được huấn luyện theo Power Team bởi các nhà Huấn luyện
              doanh nghiệp xuất sắc nhất đến từ ActionCOACH CBD Firm, giúp phát
              triển nền móng vững chắc cho doanh nghiệp, nâng cao năng lực lãnh
              đạo, quản trị, chiến lược và vận hành doanh nghiệp hiệu quả.
            </ReadMore>
          </Card>
        </Col>
        <Col className='gutter-row' xs={24} lg={8}>
          <Card
            hoverable
            className={style['benefit__card--item']}
            cover={
              <img
                alt='example'
                src='https://bm3.bnihcmc6.com/_next/image?url=%2Fxuthe.jpeg&w=1920&q=75'
              />
            }
          >
            <h3>
              <span>
                <CaretRightOutlined />
              </span>
              ĐÓN ĐẦU XU THẾ
            </h3>
            <ReadMore>
              Ứng dụng thực tế theo nền kinh tế số cùng kỷ nguyên số, cập nhật
              thêm các kiến thức, kỹ năng và xu hướng mới nhất ở cả Việt Nam và
              Thế giới.
            </ReadMore>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Benefit;
