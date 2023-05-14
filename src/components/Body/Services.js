import React from 'react';
import { SERVICE_LIST } from '../../utils/arraysRender';
import './Services.scss';

const Services = () => {
  return (
    <section className="services wrapper">
      <h1 className="services__title">Dịch vụ</h1>
      <p className="services__sub-title">
        Dịch vụ “Sang hơn Mỹ, tốt hơn Đức” tạo nên giá trị khác biệt của{' '}
        <b>NGỌC AN</b>
      </p>

      <div className="services-list">
        {SERVICE_LIST.map((service) => {
          return (
            <div key={service.id} className="services-item">
              <div className="services-item__img">
                <img src={service.icon} alt="" />
              </div>

              <div className="services-item__line"></div>

              <div className="services-item__title">{service.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
