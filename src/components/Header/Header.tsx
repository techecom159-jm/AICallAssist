import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  background: linear-gradient(135deg, rgba(5, 5, 5, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%);
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  border-bottom: 1px solid rgba(245, 158, 11, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  ${props => props.scrolled && `
    backdrop-filter: blur(30px) saturate(200%);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    border-bottom-color: rgba(245, 158, 11, 0.25);
  `}
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLogo = styled.div`
  h2 {
    color: #f59e0b;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);
    filter: drop-shadow(0 1px 3px rgba(245, 158, 11, 0.3));
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  text-decoration: none;
  color: #f59e0b;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0.875rem 1.25rem;
  border-radius: 8px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(135deg, #f59e0b, #fbbf24);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: #f59e0b;
    transform: translateY(-2px);
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavCTA = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`;

const Button = styled(Link)<{ variant: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  font-size: 0.95rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${props => props.variant === 'secondary' && `
    background: rgba(245, 158, 11, 0.05);
    border: 1px solid rgba(245, 158, 11, 0.3);
    color: rgba(255, 255, 255, 0.9);

    &:hover {
      background: rgba(245, 158, 11, 0.1);
      border-color: #f59e0b;
      color: #f59e0b;
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2);
    }
  `}

  ${props => props.variant === 'primary' && `
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    color: #000000;
    border: none;

    &:hover {
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
    }
  `}
`;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path || (location.pathname === '/' && path === '/home');
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <NavLogo>
          <h2>AI CallAssist</h2>
        </NavLogo>
        <NavLinks>
          <li>
            <NavLink to="/home" active={isActive('/home')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/features" active={isActive('/features')}>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" active={isActive('/pricing')}>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviews" active={isActive('/reviews')}>
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" active={isActive('/faq')}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" active={isActive('/contact')}>
              Contact
            </NavLink>
          </li>
        </NavLinks>
        <NavCTA>
          <Button variant="secondary" to="/contact">
            Login
          </Button>
          <Button variant="primary" to="/pricing">
            Start Now
          </Button>
        </NavCTA>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;