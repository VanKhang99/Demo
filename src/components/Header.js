import React from 'react';
import { NAVIGATION_LIST } from '../utils/arraysRender';
import { AiOutlineSearch } from 'react-icons/ai';
import './Header.scss';

const Header = () => {
  return (
    <section className="header wrapper">
      <div className="header__logo">
        NGỌC AN <br />
        <span>Automation</span>
      </div>
      <nav className="navigation">
        <ul className="navigation-list">
          {NAVIGATION_LIST.map((item, index) => {
            return (
              <li key={index} className="navigation-item">
                {item}
              </li>
            );
          })}

          <li className="navigation-item navigation-item--icon">
            <AiOutlineSearch />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
