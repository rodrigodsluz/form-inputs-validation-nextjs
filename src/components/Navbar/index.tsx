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
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  SignoutBtn,
  SignUpBtn,
} from './styles';
import { Button } from '../../styles/global';

const Navbar = () : JSX.Element => {
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

            <MobileIcon onClick={handleMobileIconClick}>
              {mobileIconClick ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleMobileIconClick} click={mobileIconClick}>
              <NavItem>
                <Link href="/">
                  <NavLinks onClick={closeMobileMenu}>
                    <NavbarMenuText style={isActive('/')}>Home</NavbarMenuText>
                  </NavLinks>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/">
                  <NavLinks onClick={closeMobileMenu}>
                    <NavbarMenuText style={isActive('/dashboard')}>
                      Dashboard
                    </NavbarMenuText>
                  </NavLinks>
                </Link>
              </NavItem>

              <>
                <NavItem>
                  <Link href="/">
                    <NavLinks onClick={closeMobileMenu}>
                      <NavbarMenuText style={isActive('/signin')}>Signin</NavbarMenuText>
                    </NavLinks>
                  </Link>
                </NavItem>

                <NavItemBtn>
                  {button ? (
                    <Link href="/">
                      <NavBtnLink>
                        <SignUpBtn style={isActive('/signup')}>
                          SIGN UP
                        </SignUpBtn>
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

              <NavItem>
                <SignoutBtn>
                  <NavbarMenuText style={{ cursor: 'pointer', color: '#fff' }}>
                    Signout
                  </NavbarMenuText>
                </SignoutBtn>
              </NavItem>
            </NavMenu>
          </NavbarContent>
        </NavbarContainer>
      </IconContext.Provider>
  );
};

export default Navbar;
