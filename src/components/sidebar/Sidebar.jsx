import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo-b.png";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false)
  return (
    <>
    <aside className={toggle ? 'aside show-menu' : 'aside'}>
      <a href="#home" className="name__logo">
        <img src={Logo} alt='logo'/>
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
              <i className="icon-user "></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
              <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
              <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#work" className="nav__link">
              <i className="icon-layers"></i>
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#blog" className="nav__link">
              <i className="icon-note"></i>
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#contact" className="nav__link">
              <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; Boby MS 2022</span>
      </div>
    </aside>

    <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
      <i className="icon-menu"></i>
    </div>
    </>
  );
};

export default Sidebar;
