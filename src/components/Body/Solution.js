import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { SOLUTION_LIST } from '../../utils/arraysRender';
import './Solution.scss';

const Solution = () => {
  return (
    <section className="solutions wrapper">
      <h1 className="solutions__title">Giải pháp</h1>

      <div className="solutions-list">
        {SOLUTION_LIST.map((solution, index) => {
          return (
            <div key={index} className="solutions-item">
              <div className="solutions-content">
                <h2 className="solutions-content__title">
                  {solution.mainTitle}
                </h2>
                <div className="list">
                  <img src={solution.mainImg} alt="" className="list-img" />
                  {solution.list.map((item) => {
                    return (
                      <div key={item.id} className="item">
                        <img src={item.icon} alt="" className="item-img" />
                        <p>{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Solution;
