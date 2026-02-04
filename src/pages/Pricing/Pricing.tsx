import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PricingHero = styled.section`
  padding: 180px 0 100px;
  background: 
    linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%),
    radial-gradient(ellipse at top, rgba(245, 158, 11, 0.08) 0%, transparent 50%);
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
  position: relative;
  min-height: 500px;
  width: 100%;
  box-sizing: border-box;
  display: block;
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  .container {
    position: relative;
    z-index: 10;
    display: block;
    visibility: visible;
  }

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

  .section-subtitle {
    color: #475569 !important;
    font-size: clamp(1.1rem, 2.5vw, 1.375rem);
    margin-bottom: 3rem;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.8;
    font-weight: 500;
    text-align: center;
    opacity: 0.9;
  }
`;

const PricingSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%);
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const PricingCard = styled.div<{ variant?: 'popular' | 'premium' }>`
  background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
  border: 2px solid #e5e5e5;
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

  ${props => props.variant === 'popular' && `
    border-color: #f59e0b;
    box-shadow: 0 10px 30px rgba(245, 158, 11, 0.1);
    transform: scale(1.05);
  `}

  ${props => props.variant === 'premium' && `
    border-color: #8b5cf6;
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1);
  `}

  &:hover {
    transform: translateY(-8px) ${props => props.variant === 'popular' ? 'scale(1.05)' : 'scale(1.02)'};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }
`;

const Badge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
`;

const PricingHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h3 {
    color: #1e293b;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1.5rem;
  }

  .price {
    font-size: 3rem;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 0.5rem;

    span {
      font-size: 1rem;
      color: #64748b;
      font-weight: 400;
    }
  }

  .savings {
    font-size: 0.875rem;
    color: #059669;
    font-weight: 600;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;

  li {
    padding: 0.75rem 0;
    color: #64748b;
    display: flex;
    align-items: center;

    &::before {
      content: '✓';
      color: #059669;
      font-weight: 700;
      margin-right: 12px;
      font-size: 1.2rem;
    }
  }
`;

const PackageFeatures = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

const FeatureTag = styled.span`
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const Button = styled.button<{ variant?: 'primary' | 'outline' }>`
  width: 100%;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    color: #000000;

    &:hover {
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
    }
  ` : `
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

const PricingFooter = styled.div`
  text-align: center;
  margin-top: 3rem;
  color: #64748b;
  font-size: 0.875rem;
`;

const WhySection = styled.section`
  padding: 100px 0;
  background: #f8fafc;

  h2 {
    color: #1e293b;
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 800;
    text-align: center;
    margin-bottom: 1rem;
    letter-spacing: -0.025em;
  }

  .section-subtitle {
    color: #64748b;
    text-align: center;
    font-size: 1.25rem;
    margin-bottom: 4rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }
`;

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const WhyItem = styled.div`
  text-align: center;
  padding: 2rem;

  .why-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: #1e293b;
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

const CompareSection = styled.section`
  padding: 100px 0;
  background: #ffffff;

  h2 {
    color: #1e293b;
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 800;
    text-align: center;
    margin-bottom: 3rem;
    letter-spacing: -0.025em;
  }
`;

const ComparisonTable = styled.div`
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

    th, td {
      padding: 1rem;
      text-align: center;
      border-bottom: 1px solid #e5e7eb;
    }

    th {
      background: #f8fafc;
      color: #1e293b;
      font-weight: 700;
    }

    td {
      color: #64748b;
    }

    tbody tr:hover {
      background: #f8fafc;
    }
  }
`;

const FinalCTA = styled.section`
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #000000;
  padding: 120px 0;
  text-align: center;
  position: relative;
  overflow: visible;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  display: block;
  margin-top: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 70% 80%, rgba(0, 0, 0, 0.1) 0%, transparent 40%);
    pointer-events: none;
  }

  .container {
    position: relative;
    z-index: 11;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  h2 {
    color: #000000;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    font-weight: 500;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const CTAButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 18px 36px;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 12px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: inline-block;

  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
    color: #ffffff;
    border-color: #000000;

    &:hover {
      background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      border-color: #333333;
    }
  ` : `
    background: transparent;
    color: #000000;
    border-color: #000000;

    &:hover {
      background: #000000;
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
  `}
`;

const CTASubtitle = styled.p`
  font-size: 0.875rem;
  margin-bottom: 0;
  opacity: 0.8;
`;

const Pricing: React.FC = () => {
  return (
    <>
      <PricingHero>
        <div className="container">
          <h1>What Do You Need? Choose Here.</h1>
          <p className="section-subtitle">
            AI assistants that book appointments and handle your customers professionally
          </p>
        </div>
      </PricingHero>

      <PricingSection>
        <div className="container">
          <PricingGrid>
            {/* Basic Package */}
            <PricingCard>
              <PricingHeader>
                <h3>SMS Automation</h3>
                <p>Your customers never forget their appointments</p>
                <div className="price">€49<span>/month</span></div>
              </PricingHeader>
              <FeaturesList>
                <li>SMS reminders before appointments</li>
                <li>Customers get payment links</li>
                <li>Instant booking notifications</li>
                <li>Runs automatically, no manual work</li>
              </FeaturesList>
              <Button variant="outline">14 Days Free Trial</Button>
            </PricingCard>

            {/* WhatsApp Package */}
            <PricingCard variant="popular">
              <Badge>Most Popular</Badge>
              <PricingHeader>
                <h3>WhatsApp AI Bot</h3>
                <p>Customers text you - we respond</p>
                <div className="price">€99<span>/month</span></div>
              </PricingHeader>
              <FeaturesList>
                <li>Accept appointments via WhatsApp</li>
                <li>Automatic responses to common questions</li>
                <li>Customers get payment links</li>
                <li>Runs 24/7, even while you sleep</li>
              </FeaturesList>
              <Button variant="primary">14 Days Free Trial</Button>
            </PricingCard>

            {/* Voice AI Package */}
            <PricingCard>
              <PricingHeader>
                <h3>Voice AI Agent</h3>
                <p>We answer the phone for you</p>
                <div className="price">€149<span>/month</span></div>
              </PricingHeader>
              <FeaturesList>
                <li>Take calls 24 hours a day</li>
                <li>Book appointments like a real employee</li>
                <li>Customers get SMS with payment link</li>
                <li>Forward difficult questions to you</li>
              </FeaturesList>
              <Button variant="outline">14 Days Free Trial</Button>
            </PricingCard>

            {/* Complete Package */}
            <PricingCard variant="premium">
              <Badge>Save €48/Month</Badge>
              <PricingHeader>
                <h3>Complete Package</h3>
                <p>Everything together, stress-free</p>
                <div className="price">€249<span>/month</span></div>
                <div className="savings">Individual: €297 - You save €48</div>
              </PricingHeader>
              <PackageFeatures>
                <FeatureTag>SMS</FeatureTag>
                <FeatureTag>WhatsApp</FeatureTag>
                <FeatureTag>Phone</FeatureTag>
              </PackageFeatures>
              <FeaturesList>
                <li>WhatsApp + Phone + SMS - everything included</li>
                <li>You save €48 per month</li>
                <li>Priority support for questions</li>
                <li>Complete protection from empty appointments</li>
              </FeaturesList>
              <Button variant="primary">Activate Everything</Button>
            </PricingCard>
          </PricingGrid>

          <PricingFooter>
            <p>All packages: 14 days free trial • No credit card required • Cancel anytime</p>
          </PricingFooter>
        </div>
      </PricingSection>

      <WhySection>
        <div className="container">
          <h2>Why You Don't Lose Money Anymore?</h2>
          <p className="section-subtitle">
            When someone books, they get a payment link. They pay e.g. €10 or €20 upfront. If they
            don't show, you keep the money. That simple.
          </p>

          <WhyGrid>
            <WhyItem>
              <div className="why-icon">💳</div>
              <h3>Customer pays first → Appointment is serious</h3>
            </WhyItem>
            <WhyItem>
              <div className="why-icon">💰</div>
              <h3>Doesn't show → You keep the money</h3>
            </WhyItem>
            <WhyItem>
              <div className="why-icon">📱</div>
              <h3>We remind them via SMS so they don't forget</h3>
            </WhyItem>
          </WhyGrid>
        </div>
      </WhySection>

      <CompareSection>
        <div className="container">
          <h2>Compare All Features</h2>
          <ComparisonTable>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>SMS</th>
                  <th>WhatsApp</th>
                  <th>Voice AI</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SMS Reminders</td>
                  <td>✓</td>
                  <td>-</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>WhatsApp Bot</td>
                  <td>-</td>
                  <td>✓</td>
                  <td>-</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Voice Calls</td>
                  <td>-</td>
                  <td>-</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Payment Links</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>24/7 Support</td>
                  <td>-</td>
                  <td>Standard</td>
                  <td>Standard</td>
                  <td>Priority</td>
                </tr>
                <tr>
                  <td>Calendar Integration</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Monthly Price</td>
                  <td>€49</td>
                  <td>€99</td>
                  <td>€149</td>
                  <td>€249</td>
                </tr>
              </tbody>
            </table>
          </ComparisonTable>
        </div>
      </CompareSection>

      <FinalCTA>
        <div className="container">
          <h2>Ready to Start?</h2>
          <p>Choose your plan and start protecting your business from empty appointments today.</p>

          <CTAButtons>
            <CTAButton variant="primary">Start Free Trial</CTAButton>
            <CTAButton variant="secondary" as={Link} to="/contact">Contact Sales</CTAButton>
          </CTAButtons>

          <CTASubtitle>All plans include 14-day free trial</CTASubtitle>
        </div>
      </FinalCTA>
    </>
  );
};

export default Pricing;