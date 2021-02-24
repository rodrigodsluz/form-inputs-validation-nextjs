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
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  NavbarItemBtn,
  SignUpBtn,
  SignoutBtn,
} from './styles';

const Navbar = (): JSX.Element => {
  const router = useRouter();

  const [mobileIconClick, setMobileIconClick] = useState(false);

  const handleMobileIconClick = () => setMobileIconClick(!mobileIconClick);
  const closeMobileMenu = () => setMobileIconClick(false);

  // Add in the utils folder
  // const [button, setButton] = useState(true);
  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('resize', showButton);
  // });

  const isActive = (path) => {
    if (router.pathname === path) {
      return { color: '#4b59f7' };
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
              <Link href="/">
                <NavbarLinks onClick={closeMobileMenu}>
                  <NavbarMenuText style={isActive('/dashboard')}>
                    Dashboard
                  </NavbarMenuText>
                </NavbarLinks>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link href="/">
                <NavbarLinks onClick={closeMobileMenu}>
                  <NavbarMenuText style={isActive('/signin')}>
                    Signin
                  </NavbarMenuText>
                </NavbarLinks>
              </Link>
            </NavbarItem>

            <NavbarItemBtn>
              <Link href="/">
                <NavbarLinks>
                  <SignUpBtn style={isActive('/signup')}>
                    SIGN UP
                  </SignUpBtn>
                </NavbarLinks>
              </Link>
            </NavbarItemBtn>

            <NavbarItem>
              <SignoutBtn>
                <NavbarMenuText style={{ cursor: 'pointer', color: '#fff' }}>
                  Signout
                </NavbarMenuText>
              </SignoutBtn>
            </NavbarItem>
          </NavbarMenu>
        </NavbarContent>
      </NavbarContainer>
    </IconContext.Provider>
  );
};

export default Navbar;
