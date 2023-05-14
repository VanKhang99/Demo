import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <img
          src="http://trongnhantech.vn/thumbs/1366x515x1/upload/photo/slide-9650.png"
          alt=""
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-content__title">
          Trọng Niềm Tin - Nhân Thành Công
        </h1>
        <h2 className="hero-content__sub-title">NGỌC AN AUTOMATION</h2>
        <button className="hero-content__button">Tìm hiểu thêm</button>
      </div>
    </section>
  );
};

export default Hero;
