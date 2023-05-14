import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <h1 className="footer__title">
          CÔNG TY TNHH SERVICES TECHNICAL AUTOMATION NGỌC AN VIỆT NAM
        </h1>

        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-about__title">Về chúng tôi</h3>
            <div className="footer-about__line"></div>
            <div className="footer-about__description">
              Ngọc An Automation được thành lập dựa trên sự tin cậy của quý
              khách. Với nhiều sản phẩm đa dạng, giả pháp tự động hóa hoàn hào
              và đặc biệt là đội ngũ kỹ thuật cao, dịch vụ bảo trì, sửa chữa đã
              được khẳng định trên thị trường hiện nay. Rất mong được phục vụ để
              làm hài lòng quý khách hàng nhiều hơn nữa.
            </div>
            <p></p>
          </div>

          <div className="footer-contact">
            <h3 className="footer-contact__title">Liên hệ với chúng tôi</h3>
            <div className="footer-contact__line"></div>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <b>Địa chỉ: </b>
                <span>
                  571 Lý Thái Tổ, ấp Bến Cam, Xã Phước Thiền, Huyện Nhơn Trạch,
                  Tỉnh Đồng Nai
                </span>
              </div>

              <div className="footer-contact-item">
                <b>Hotline: </b>
                <span>0932026032</span>
              </div>

              <div className="footer-contact-item">
                <b>Mail: </b>
                <span>ctyngocanvietnam@gmail.com</span>
              </div>

              <div className="footer-contact-item">
                <b>Website: </b>
                <span>ngocanautomation.com</span>
              </div>
            </div>
          </div>

          <div className="footer-info">
            <h3 className="footer-info__title">Nhận thông tin</h3>
            <div className="footer-info__line"></div>
            <p>
              Đăng ký để nhận tin tức về sản phẩm và giải pháp mới nhất từ{' '}
              <b>NGỌC AN</b>
            </p>

            <div className="footer-info-input">
              <input type="text" placeholder="Nhập email của bạn" />
              <button>GỬI</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
