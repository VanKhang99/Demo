import React from 'react';
import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects__title">Dự án nổi bật</h1>
      <div className="projects-list">
        <div className="projects-item">
          <div className="overlay">
            <img
              src="https://dattech.com.vn/wp-content/uploads/2020/09/may-ep-vien.jpg"
              alt=""
            />
            <p>
              Tăng hiệu quả sản xuất nhờ ứng dụng biến tần INVT cho máy ép viên
              gỗ
            </p>
          </div>
        </div>
        <div className="projects-item">
          <img
            src="https://dattech.com.vn/wp-content/uploads/2020/09/may-ep-vien.jpg"
            alt=""
          />
          <p>
            Tăng hiệu quả sản xuất nhờ ứng dụng biến tần INVT cho máy ép viên gỗ
          </p>
        </div>
        <div className="projects-item">
          <img
            src="https://dattech.com.vn/wp-content/uploads/2020/09/may-ep-vien.jpg"
            alt=""
          />
          <p>
            Tăng hiệu quả sản xuất nhờ ứng dụng biến tần INVT cho máy ép viên gỗ
          </p>
        </div>
        <div className="projects-item">
          <img
            src="https://dattech.com.vn/wp-content/uploads/2020/09/may-ep-vien.jpg"
            alt=""
          />
          <p>
            Tăng hiệu quả sản xuất nhờ ứng dụng biến tần INVT cho máy ép viên gỗ
          </p>
        </div>
        <div className="projects-item">
          <div className="overlay">
            <img
              src="https://dattech.com.vn/wp-content/uploads/2020/09/may-ep-vien.jpg"
              alt=""
            />
            <p>
              Tăng hiệu quả sản xuất nhờ ứng dụng biến tần INVT cho máy ép viên
              gỗ
            </p>
          </div>
        </div>
      </div>

      <div className="dots">
        <div className="dots-item"></div>
        <div className="dots-item"></div>
        <div className="dots-item"></div>
        <div className="dots-item"></div>
        <div className="dots-item"></div>
        <div className="dots-item"></div>
        <div className="dots-item"></div>
        <div className="dots-item"></div>
      </div>
    </section>
  );
};

export default Projects;
