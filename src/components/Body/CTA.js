import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

import './cta.scss';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta__image">
        <img
          src="http://trongnhantech.vn/thumbs/1366x400x1/upload/photo/bannerqc-8464.png"
          alt=""
        />
      </div>

      <div className="cta-content">
        <h1 className="cta-content__title">Hãy gọi ngay cho chúng tôi</h1>
        <h2 className="cta-content__sub-title">
          Nếu bạn cần tư vấn hay thông tin về mẫu mã sản phẩm, giá cả hoặc vấn
          đề khác, liên hệ cho chúng tôi
        </h2>
        <div className="cta-contacts">
          <button className="cta-contacts__button">
            <AiOutlineMessage />
            <span>0977 885 158</span>
          </button>
          <button className="cta-contacts__button">
            <FiMail />
            <span>huynhlehuunhan@gmail.com</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
