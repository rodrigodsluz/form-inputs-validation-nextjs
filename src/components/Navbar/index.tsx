import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons/lib';
import { useEffect, useState } from 'react';
import {
  NavbarContainer,
  NavbarContent,
  NavbarLogo,
  NavbarIcon,
  NavbarMenuText,
  NavbarMobileMenuIcon,
  NavbarMobileMenu,
  NavbarItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  SignoutBtn,
  SignUpBtn,
} from './styles';
import { Button } from '../../styles/global';

const Navbar = (): JSX.Element => {
  const router = useRouter();

  const [mobileIconClick, setMobileIconClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleMobileIconClick = () => setMobileIconClick(!mobileIconClick);
  const closeMobileMenu = () => setMobileIconClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', showButton);
  });

  const isActive = (path) => {
    if (router.pathname === path) {
      return { color: 'red' };
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

          <NavbarMobileMenu
            onClick={handleMobileIconClick}
            mobileClick={mobileIconClick}
          >
            <NavbarItem>
              <Link href="/">
                <NavLinks onClick={closeMobileMenu}>
                  <NavbarMenuText style={isActive('/')}>Home</NavbarMenuText>
                </NavLinks>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link href="/">
                <NavLinks onClick={closeMobileMenu}>
                  <NavbarMenuText style={isActive('/dashboard')}>
                    Dashboard
                  </NavbarMenuText>
                </NavLinks>
              </Link>
            </NavbarItem>

            <>
              <NavbarItem>
                <Link href="/">
                  <NavLinks onClick={closeMobileMenu}>
                    <NavbarMenuText style={isActive('/signin')}>
                      Signin
                    </NavbarMenuText>
                  </NavLinks>
                </Link>
              </NavbarItem>

              <NavItemBtn>
                {button ? (
                  <Link href="/">
                    <NavBtnLink>
                      <SignUpBtn style={isActive('/signup')}>SIGN UP</SignUpBtn>
                    </NavBtnLink>
                  </Link>
                ) : (
                  <Link href="/">
                    <NavBtnLink>
                      <Button
                        style={isActive('/signup')}
                        onClick={closeMobileMenu}
                      >
                        SIGN UP
                      </Button>
                    </NavBtnLink>
                  </Link>
                )}
              </NavItemBtn>
            </>

            <NavbarItem>
              <SignoutBtn>
                <NavbarMenuText style={{ cursor: 'pointer', color: '#fff' }}>
                  Signout
                </NavbarMenuText>
              </SignoutBtn>
            </NavbarItem>
          </NavbarMobileMenu>
        </NavbarContent>
      </NavbarContainer>
    </IconContext.Provider>
  );
};

export default Navbar;
