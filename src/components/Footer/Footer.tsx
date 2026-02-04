import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: #ffffff;
  padding: 80px 0 20px;
  position: relative;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterBrand = styled.div`
  h3 {
    color: #f59e0b;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  > p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #f59e0b;
    }
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h4 {
    color: #ffffff;
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 0.75rem;

      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #f59e0b;
        }
      }
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const FooterLegal = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.3s ease;

    &:hover {
      color: #f59e0b;
    }
  }
`;

const FooterCertifications = styled.div`
  display: flex;
  gap: 1.5rem;
  
  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.875rem;
  }
`;

const Copyright = styled.div`
  text-align: center;
  
  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.875rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterBrand>
            <h3>AI CallAssist</h3>
            <p>AI Calls Made Easy</p>
            <ContactInfo>
              <a href="mailto:info@aicallassist.com">info@aicallassist.com</a>
              <a href="tel:+43720224117">+43 720 224117</a>
            </ContactInfo>
          </FooterBrand>

          <FooterLinks>
            <FooterColumn>
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </FooterColumn>

            <FooterColumn>
              <h4>About</h4>
              <ul>
                <li><a href="#">Career</a></li>
                <li><a href="#">Press</a></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </FooterColumn>

            <FooterColumn>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Webinars</a></li>
                <li><a href="#">API Documentation</a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </FooterColumn>
          </FooterLinks>
        </FooterContent>

        <FooterBottom>
          <FooterLegal>
            <a href="#">Imprint</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </FooterLegal>
          <FooterCertifications>
            <span>Made in Austria</span>
            <span>GDPR Compliant</span>
            <span>EU AI Act Compliant</span>
          </FooterCertifications>
        </FooterBottom>

        <Copyright>
          <p>© 2026 AI CallAssist. All rights reserved.</p>
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;