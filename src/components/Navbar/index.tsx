import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons/lib';
import { useState } from 'react';
import {
  NavbarContainer,
  NavbarContent,
  NavbarLogo,
  NavbarIcon,
  NavbarMenuText,
  NavbarMobileMenuIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  NavbarItemBtn,
  SignUpBtn,
} from './styles';

import { routes } from '../../routes';

const Navbar = (): JSX.Element => {
  const router = useRouter();

  const [mobileIconClick, setMobileIconClick] = useState(false);

  const handleMobileIconClick = () => setMobileIconClick(!mobileIconClick);
  const closeMobileMenu = () => setMobileIconClick(false);

  const isActive = (path) => {
    if (router.pathname === path) {
      return {
        color: '#4b59f7',
        background: '#101522',
        border: '1px solid blue',
        borderRadius: '25px',
        padding: '3px 5px',
      };
    }
  };
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <NavbarContainer>
        <NavbarContent>
          <Link href="/">
            <NavbarLogo>
              <NavbarIcon />
              <NavbarMenuText>Rodrigo Luz App</NavbarMenuText>
            </NavbarLogo>
          </Link>

          <NavbarMobileMenuIcon onClick={handleMobileIconClick}>
            {mobileIconClick ? <FaTimes /> : <FaBars />}
          </NavbarMobileMenuIcon>

          <NavbarMenu
            onClick={handleMobileIconClick}
            mobileClick={mobileIconClick}
          >
            <NavbarItem>
              <Link href="/">
                <NavbarLinks onClick={closeMobileMenu}>
                  <NavbarMenuText style={isActive('/')}>Home</NavbarMenuText>
                </NavbarLinks>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link href={routes.dashboard}>
                <NavbarLinks onClick={closeMobileMenu}>
                  <NavbarMenuText style={isActive('/dashboard')}>
                    Dashboard
                  </NavbarMenuText>
                </NavbarLinks>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link href="/signin">
                <NavbarLinks onClick={closeMobileMenu}>
                  <NavbarMenuText style={isActive('/signin')}>
                    Sign in
                  </NavbarMenuText>
                </NavbarLinks>
              </Link>
            </NavbarItem>

            <NavbarItemBtn>
              <Link href="/signup">
                <NavbarLinks>
                  <SignUpBtn style={isActive('/signup')}>SIGN UP</SignUpBtn>
                </NavbarLinks>
              </Link>
            </NavbarItemBtn>

            <NavbarItem>
              <Link href="/">
                <NavbarLinks>
                  <NavbarMenuText>Sign out</NavbarMenuText>
                </NavbarLinks>
              </Link>
            </NavbarItem>
          </NavbarMenu>
        </NavbarContent>
      </NavbarContainer>
    </IconContext.Provider>
  );
};

export default Navbar;
