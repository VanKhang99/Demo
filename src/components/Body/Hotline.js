import React from 'react';
import {
  BsTelephoneFill,
  BsFacebook,
  BsTiktok,
  BsInstagram,
} from 'react-icons/bs';
import '../Body/Hotline.scss';

const Hotline = () => {
  return (
    <div className="hotline">
      <div className="hotline-left">
        <BsTelephoneFill />
        <span>Hotline: 0932026032</span>
      </div>
      <div className="hotline-right">
        <p className="hotline-right__price">Nhận báo giá</p>
        <p className="hotline-separate">|</p>
        <div className="hotline-socials">
          <BsFacebook />
          <BsInstagram />
          <BsTiktok />
        </div>
      </div>
    </div>
  );
};

export default Hotline;
