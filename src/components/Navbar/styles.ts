import styled from 'styled-components';

import { FaMagento } from 'react-icons/fa';

export const NavbarContainer = styled.nav`
  background: ${(props) => props.theme.colors.navbarBackground};

  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;

  z-index: 1;
`;

export const NavbarContent = styled.div`
  height: 50px;
  width: 100%;
  max-width: 1300px;

  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const NavbarLogo = styled.a`
  cursor: pointer;

  text-decoration: none;

  font-size: 2rem;

  display: flex;
  align-items: center;
`;

export const NavbarIcon = styled(FaMagento)`
  margin-right: 0.5rem;

  &:hover {
    fill: #4b59f7;
    transition: all 0.3s ease;
  }
`;

export const NavbarMenuText = styled.span`
  color: ${(props) => props.theme.colors.navbarText};

  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;

    right: 0;
    transform: translate(-100%, 60%);

    font-size: 1.8rem;

    cursor: pointer;
  }
`;

export const SignUpBtn = styled.button`
  margin-bottom: 12px;
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  /* align-items: center; */
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 50px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const SignoutBtn = styled.span`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 50px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  margin-top: 6.5px;
`;
