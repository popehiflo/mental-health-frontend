import { useRef, useState } from 'react';
import styledComponents from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBrain, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styledComponents.header`
  padding: 2rem 9%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  @media (max-width: 991px) {
    padding: 2rem;
  }
`;

const HeaderLogo = styledComponents.h1`
  font-size: 2.5rem;
  color: var(--secondary-color);
  font-weight: 400;
`;

const HeaderRest = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const HeaderLogoIcon = styledComponents.i`
  color: var(--primary-color);
`;

const HeaderNavMenu = styledComponents.nav`
  a {
    font-size: 1.7rem;
    color: var(--secondary-color);
    margin-right: 2rem;
    &:hover {
      color: var(--primary-color);
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 115%;
    right: 2rem;
    border-radius: 0.5rem;
    box-shadow: var(--primary-box-shadow);
    width: 30rem;
    background: var(--background-color);
    transform: scale(0);
    opacity: 0;
    transform-origin: top right;
    transition: none;
    a {
      font-size: 2rem;
      display: block;
      transition: 0.2s ease-out;
      text-align: center;
      margin: 0.2rem 0.5rem;
    }
    &.active {
      transform: scale(1);
      opacity: 1;
      transition: 0.2s ease-out;
    }
  }
`;

const HeaderBtnCart = styledComponents.div`
  font-size: 2rem;
  color: var(--secondary-color);
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-items: right;
`;
const HeaderBtnMenu = styledComponents.div`
  font-size: 2rem;
  background: var(--background-color);
  border-radius: 0.5rem;
  color: var(--secondary-color);
  padding: 0 1rem;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: initial;
  }
`;

const Header = () => {
  const menu = useRef();
  const [isActive, setIsActive] = useState(false);
  const handleClickMenu = () => {
    if (isActive) {
      menu.current.classList.remove('active');
    } else {
      menu.current.classList.toggle('active');
    }
    setIsActive(!isActive);
  };
  window.onscroll = () => {
    menu.classList.remove('active');
  };

  const quantity = 1;

  return (
    <HeaderWrapper>
      <NavLink to="/">
        <HeaderLogo>
          <HeaderLogoIcon>
            <FontAwesomeIcon icon={faBrain} />
          </HeaderLogoIcon>
          MHealth
        </HeaderLogo>
      </NavLink>
      <HeaderRest>
        <HeaderNavMenu className="navbar" ref={menu}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu1">Menu 1</NavLink>
          <NavLink to="/menu2">Menu 1</NavLink>
          <NavLink to="/menu3">Menu 1</NavLink>
          <NavLink to="/sign-in">
            <button type="button" className="btn-primary-sm">User</button>
          </NavLink>
        </HeaderNavMenu>
        <HeaderBtnCart>
          {
            quantity > 0
              ? <FontAwesomeIcon icon={faCartShopping} style={{ color: 'var(--primary-color)' }} bounce />
              : <FontAwesomeIcon icon={faCartShopping} />
          }
        </HeaderBtnCart>
        <HeaderBtnMenu id="header__btn-menu" onClick={handleClickMenu} aria-hidden>
          {isActive ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </HeaderBtnMenu>
      </HeaderRest>
    </HeaderWrapper>
  );
};

export default Header;
