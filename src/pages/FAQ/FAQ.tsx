import React from 'react';
import styled from 'styled-components';

const FAQHero = styled.section`
  padding: 180px 0 100px;
  background: 
    linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%),
    radial-gradient(ellipse at top, rgba(245, 158, 11, 0.08) 0%, transparent 50%);
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
  position: relative;
  min-height: 500px;

  h1 {
    color: #1e293b;
    margin-bottom: 1.5rem;
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    color: #475569;
    font-size: clamp(1.1rem, 2.5vw, 1.375rem);
    margin-bottom: 3rem;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.8;
    font-weight: 500;
    opacity: 0.9;
  }
`;

const FAQ: React.FC = () => {
  return (
    <FAQHero>
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <p>
          Everything you need to know about AI CallAssist and how it works
        </p>
      </div>
    </FAQHero>
  );
};

export default FAQ;