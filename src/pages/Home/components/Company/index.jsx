import { Col, Row } from 'antd';
import Container from '../../../../components/Container';
import style from './index.module.scss';
import { Link } from 'react-router-dom';

const Company = ({ title }) => {
  return (
    <Container>
      <Row justify={'center'}>
        <h1 className={style.company__title}>
          CÁC CÔNG TY TIÊU BIỂU PHÍA <span>{title}</span>
        </h1>
      </Row>
      <Row gutter={[16, 16]}>
        <Col md={12} xs={24}>
          <div to='/profile' className={style.container}>
            <Row justify={'space-between'}>
              <Col>
                <Link to='/profile'>
                  <img
                    className={style.banner}
                    src='https://vj-partner.com/uploads/img/general/1638966072-logo-VJP-[306x75].png'
                    alt=''
                  />
                </Link>
              </Col>
              <Col className={style.category}>
                <span>Category: Industry</span>
              </Col>
              <Col>
                <img
                  className={style.logo}
                  src='https://investment-day-assets.sgp1.digitaloceanspaces.com/ybahcm/2021/03/23214250/Logo-YBA-2.png'
                  alt=''
                />
              </Col>
            </Row>
            <Row className={style.content}>
              <Col span={14} className={style.content__container}>
                <h3 className={style.title}>VIET JAPAN PARTNER</h3>
                <Row className={style.content__top}>
                  <Col span={12}>
                    <Row align={'middle'} className={style.content__item}>
                      <span>Estalishment: </span>
                      <p>Nov, 2015</p>
                    </Row>
                  </Col>
                  <Col span={12}>
                    <Row align={'middle'} className={style.content__item}>
                      <span>Employers: </span>
                      <p>30</p>
                    </Row>
                  </Col>
                </Row>
                <Row align={'middle'} className={style.content__item}>
                  <span>Capital: </span>
                  <p>$ 100,000</p>
                </Row>
                <p className={style.addresss}>
                  Room 22, House 8, Road 13, Quang Trung Software City, Tan
                  Chanh Hiep Ward, 12 District, HCM City, Vietnam
                </p>
                <Row className={style.flag}>
                  <img
                    src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png'
                    alt=''
                  />
                  <img
                    src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png'
                    alt=''
                  />
                  <img
                    src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png'
                    alt=''
                  />
                  <img
                    src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png'
                    alt=''
                  />
                </Row>
              </Col>
              <Col span={10} className={style.customer__container}>
                <span>Needs</span>
                <div className={style.customer}>
                  <div>Find customer</div>
                  <div className={style.customer__item}>Find customer</div>
                  <div className={style.customer__item}>Find customer</div>
                  <div className={style.customer__item}>Find customer</div>
                  <div className={style.customer__item}>Find customer</div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={12} xs={24}>
          <div className={style.container}>
            <Row justify={'space-between'}>
              <Col>
                <img
                  className={style.banner}
                  src='https://vj-partner.com/uploads/img/general/1638966072-logo-VJP-[306x75].png'
                  alt=''
                />
              </Col>
              <Col className={style.category}>
                <span>Category: Industry</span>
              </Col>
              <Col>
                <img
                  className={style.logo}
                  src='https://investment-day-assets.sgp1.digitaloceanspaces.com/ybahcm/2021/03/23214250/Logo-YBA-2.png'
                  alt=''
                />
              </Col>
            </Row>
            <Row className={style.content}>
              <Col span={14} className={style.content__container}>
                <h3 className={style.title}>VIET JAPAN PARTNER</h3>
                <Row className={style.content__top}>
                  <Col span={12}>
                    <Row align={'middle'} className={style.content__item}>
                      <span>Estalishment: </span>
                      <p>Nov, 2015</p>
                    </Row>
                  </Col>
                  <Col span={12}>
                    <Row align={'middle'} className={style.content__item}>
                      <span>Employers: </span>
                      <p>30</p>
                    </Row>
                  </Col>
                </Row>
                <Row align={'middle'} className={style.content__item}>
                  <span>Capital: </span>
                  <p>$ 100,000</p>
                </Row>
                <p className={style.addresss}>
                  Room 22, House 8, Road 13, Quang Trung Software City, Tan
                  Chanh Hiep Ward, 12 District, HCM City, Vietnam
                </p>
                <Row className={style.flag}>
                  <img
                    src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png'
                    alt=''
                  />
                  <img
                    src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png'
                    alt=''
                  />
                  <img
                    src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png'
                    alt=''
                  />
                  <img
                    src='https://seeklogo.com/images/V/viet-nam-logo-3D78D597F9-seeklogo.com.png'
                    alt=''
                  />
                </Row>
              </Col>
              <Col span={10} className={style.customer__container}>
                <span>Needs</span>
                <div className={style.customer}>
                  <div>Find customer</div>
                  <div className={style.customer__item}>Find customer</div>
                  <div className={style.customer__item}>Find customer</div>
                  <div className={style.customer__item}>Find customer</div>
                  <div className={style.customer__item}>Find customer</div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Company;
