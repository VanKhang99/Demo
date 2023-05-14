import React from 'react';
import './experience.scss';

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-item">
        <b>
          17
          <sup>+</sup>
        </b>
        <br />
        <span>Năm kinh nghiệm</span>
      </div>
      <div className="experience-item">
        <b>
          400
          <sup>+</sup>
        </b>
        <br />
        <span>Nhân sự tài năng</span>
      </div>
      <div className="experience-item">
        <b>
          600.000
          <sup>+</sup>
        </b>
        <br />
        <span>Sản phẩm bán ra</span>
      </div>
      <div className="experience-item">
        <b>
          10.000
          <sup>+</sup>
        </b>
        <br />
        <span>Khách hàng</span>
      </div>
    </div>
  );
};

export default Experience;
