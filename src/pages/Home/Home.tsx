import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  padding: 140px 0 100px;
  background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.05) 0%, rgba(10, 10, 10, 0) 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: 1.1;
    font-weight: 800;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
  }

  .gradient-text {
    background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: clamp(1.125rem, 2vw, 1.375rem);
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 3rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const Button = styled(Link)<{ variant: 'primary' | 'secondary' }>`
  padding: 18px 36px;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  border: 2px solid transparent;

  ${props => props.variant === 'primary' && `
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    color: #000000;

    &:hover {
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
    }
  `}

  ${props => props.variant === 'secondary' && `
    background: transparent;
    color: #f59e0b;
    border-color: #f59e0b;

    &:hover {
      background: #f59e0b;
      color: #000000;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
    }
  `}
`;

const TrustIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  flex-wrap: wrap;

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

const Home: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <h1>
          Your AI Assistant for <span className="gradient-text">Perfect Appointments</span>
        </h1>
        <p>
          Stop losing money from no-shows. Our AI handles calls, books appointments, and collects payments upfront. 
          Professional, reliable, and works 24/7.
        </p>
        <CTAButtons>
          <Button variant="primary" to="/pricing">
            Start Free Trial
          </Button>
          <Button variant="secondary" to="/features">
            See How It Works
          </Button>
        </CTAButtons>
        <TrustIndicators>
          <span>✓ 14-day free trial</span>
          <span>✓ No setup fees</span>
          <span>✓ Cancel anytime</span>
        </TrustIndicators>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;