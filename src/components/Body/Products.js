import React from 'react';
import './Products.scss';

const Products = () => {
  return (
    <section className="products wrapper">
      <h1 className="products__title">Sản phẩm</h1>

      <div className="products-list">
        <div className="products-item">
          <div className="products-item__title">
            <span>Sản phẩm đã qua sử dụng</span>
          </div>
          <div className="products-item-content">
            <div className="products-item-content__img">
              <img
                src="http://trongnhantech.vn/thumbs/235x225x1/upload/product/z360049093507776c6869bc010a1394c5891812f60d461-4825.jpg"
                alt=""
              />
            </div>

            <ul className="list">
              <li>Biến tần</li>
              <li>Servo</li>
              <li>Màn hình cảm ứng</li>
              <li>Bộ Motor bước</li>
              <li>Bộ sàn biên và thắng từ</li>
              <li>Bộ xử lý CORONA - Khử tỉnh điện</li>
              <li>Bộ điều khiển DC</li>
              <li>Đồng hồ Winpark</li>
              <li>Các loại cảm biến</li>
              <li className="list__button">Xem thêm</li>
            </ul>
          </div>
        </div>
        <div className="products-item">
          <div className="products-item__title">
            <span>Sản phẩm mới</span>
          </div>
          <div className="products-item__line"></div>
          <div className="products-item-content">
            <div className="products-item-content__img">
              <img
                src="http://trongnhantech.vn/thumbs/235x225x1/upload/product/z3600498373925976560ffaa28cab43534fc8bafe2f547-9971.jpg"
                alt=""
              />
            </div>
            <ul className="list">
              <li>Biến tần</li>
              <li>Servo</li>
              <li>Màn hình cảm ứng</li>
              <li>Bộ Motor bước</li>
              <li>Bộ sàn biên và thắng từ</li>
              <li>Bộ xử lý CORONA - Khử tỉnh điện</li>
              <li>Bộ điều khiển DC</li>
              <li>Đồng hồ Winpark</li>
              <li>Các loại cảm biến</li>
              <li className="list__button">Xem thêm</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="show-products">
        <div className="show-products-title">
          <b>Biến tần</b>
          <button>Xem thêm</button>
        </div>
        <div className="show-products-list">
          <div className="show-products-item">
            <img
              src="http://trongnhantech.vn/watermark/product/524x456x1/upload/product/z3600497346196b7d2315e715d34c03fc07169b09790c0-5294.jpg"
              alt=""
            />
            <span>Biến tần đa chức năng EN500 - EN600</span>
          </div>
          <div className="show-products-item">
            <img
              src="http://trongnhantech.vn/watermark/product/524x456x1/upload/product/z3600497346196b7d2315e715d34c03fc07169b09790c0-5294.jpg"
              alt=""
            />
            <span>Biến tần đa chức năng EN500 - EN600</span>
          </div>
          <div className="show-products-item">
            <img
              src="http://trongnhantech.vn/watermark/product/524x456x1/upload/product/z3600497346196b7d2315e715d34c03fc07169b09790c0-5294.jpg"
              alt=""
            />
            <span>Biến tần đa chức năng EN500 - EN600</span>
          </div>
          <div className="show-products-item">
            <img
              src="http://trongnhantech.vn/watermark/product/524x456x1/upload/product/z3600497346196b7d2315e715d34c03fc07169b09790c0-5294.jpg"
              alt=""
            />
            <span>Biến tần đa chức năng EN500 - EN600</span>
          </div>
          <div className="show-products-item">
            <img
              src="http://trongnhantech.vn/watermark/product/524x456x1/upload/product/z3600497346196b7d2315e715d34c03fc07169b09790c0-5294.jpg"
              alt=""
            />
            <span>Biến tần đa chức năng EN500 - EN600</span>
          </div>
        </div>
      </div>

      <div className="show-products">
        <div className="show-products-title">
          <b>Bộ Motor bước</b>
          <button>Xem thêm</button>
        </div>
        <div className="show-products-list">
          <div className="show-products-item">
            <img
              src="http://trongnhantech.vn/watermark/product/524x456x1/upload/product/bj-2011-9796.jpg"
              alt=""
            />
            <span>Màn hình điều khiển máy cắt túi BJ-2011</span>
          </div>
          <div className="show-products-item">
            <img
              src="http://trongnhantech.vn/watermark/product/524x456x1/upload/product/bj-2011-9796.jpg"
              alt=""
            />
            <span>Màn hình điều khiển máy cắt túi BJ-2011</span>
          </div>
          <div className="show-products-item">
            <img
              src="http://trongnhantech.vn/watermark/product/524x456x1/upload/product/bj-2011-9796.jpg"
              alt=""
            />
            <span>Màn hình điều khiển máy cắt túi BJ-2011</span>
          </div>
          <div className="show-products-item">
            <img
              src="http://trongnhantech.vn/watermark/product/524x456x1/upload/product/bj-2011-9796.jpg"
              alt=""
            />
            <span>Màn hình điều khiển máy cắt túi BJ-2011</span>
          </div>
          <div className="show-products-item">
            <img
              src="http://trongnhantech.vn/watermark/product/524x456x1/upload/product/bj-2011-9796.jpg"
              alt=""
            />
            <span>Màn hình điều khiển máy cắt túi BJ-2011</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
