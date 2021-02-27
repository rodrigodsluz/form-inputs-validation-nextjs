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
  font-size: 1.6rem;

  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
  }
`;

export const NavbarMobileMenuIcon = styled.div`
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

interface NavbarMenuProps {
  mobileClick: boolean;
}

export const NavbarMenu = styled.ul<NavbarMenuProps>`
  display: flex;
  list-style: none;

  @media screen and (max-width: 960px) {
    flex-direction: column;

    width: 100%;
    position: absolute;

    top: 50px;
    left: ${({ mobileClick }) => (mobileClick ? 0 : '-100%')};

    transition: all 0.5s ease;

    background: ${(props) => props.theme.colors.navbarBackground};

    border-top: 1px solid red;
  }
`;

export const NavbarItem = styled.li`
  height: 50px;

  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    height: 20px;
    padding-bottom: 30px;

    &:hover {
      border: none;
    }
  }
`;

export const NavbarLinks = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 50px;

  cursor: pointer;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    padding: 3px;
    height: 0;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavbarItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const SignUpBtn = styled.button`
  border-radius: 12px;
  border: none;

  outline: none;

  background: ${(props) => props.theme.colors.signUpBtn};
  color: ${(props) => props.theme.colors.navbarText};

  padding: 5px 10px;

  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #0467fb;
  }

  &:active {
    outline: double;
  }

  @media screen and (max-width: 960px) {
    width: 30%;
    margin-top: 5px;
    font-size: 1.2rem;
  }
`;
