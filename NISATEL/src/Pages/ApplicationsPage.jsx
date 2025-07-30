import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import VideoPylone from '../assets/pylone.mp4';
import autoportantsImage from '../assets/pylones-monotubes-2.jpg';
import monotubesImage from '../assets/NISATEL-MAINTENANCE.webp';
import speciauxImage from '../assets/Pylônes-spéciaux.png';
import renforcementImage from '../assets/Pylones_treillis_autoportants.jpg';

// Styled Components
const ProductsPageContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background: white;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  padding: 0 20px;

  h1 {
    font-size: 3rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.3rem;
    margin-top: 10px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const ProductSection = styled.section`
  margin-bottom: 60px;
`;

const ProductContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductText = styled.div`
  flex: 1;
  min-width: 280px;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 16px;
    color: #2c3e50;
    position: relative;

    &::after {
      content: '';
      width: 50px;
      height: 3px;
      background: #f39c12;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }

  ul {
    margin-bottom: 20px;
    padding-left: 20px;
  }

  li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    font-size: 1rem;
    color: #555;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #3498db;
      font-size: 1.5rem;
      top: -5px;
    }
  }
`;

const ProductImageContainer = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 500px;
  height: 300px;
  border: 4px solid #3498db;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  &:hover {
    border-color: #f39c12;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease;

  ${ProductImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ProductButton = styled(motion.button)`
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #2980b9;
  }

  i {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

// Component
const PylonesPage = () => {
  const { t } = useTranslation();

  const productCategories = [
    {
      id: 'autoportants',
      name: t('productsPage.products.autoportants.title'),
      image: renforcementImage,
      features: t('productsPage.products.autoportants.features', { returnObjects: true }),
    },
    {
      id: 'monotubes',
      name: t('productsPage.products.monotubes.title'),
      image: autoportantsImage,
      features: t('productsPage.products.monotubes.features', { returnObjects: true }),
    },
    {
      id: 'speciaux',
      name: t('productsPage.products.speciaux.title'),
      image: speciauxImage,
      features: t('productsPage.products.speciaux.features', { returnObjects: true }),
    },
    {
      id: 'renforcement',
      name: t('productsPage.products.renforcement.title'),
      image: monotubesImage,
      features: t('productsPage.products.renforcement.features', { returnObjects: true }),
    }
  ];

  return (
    <ProductsPageContainer>
      <HeroSection>
        <VideoBackground autoPlay loop muted playsInline>
          <source src={VideoPylone} type="video/mp4" />
        </VideoBackground>
        <HeroOverlay />
        <HeroContent>
          <h1>{t('productsPage.hero.title')}</h1>
          <p>{t('productsPage.hero.subtitle')}</p>
        </HeroContent>
      </HeroSection>

      <Container>
        {productCategories.map((product, index) => (
          <ProductSection key={product.id}>
            <ProductContent>
              {index % 2 === 0 ? (
                <>
                  <ProductText>
                    <h3>{product.name}</h3>
                    <ul>
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <ProductButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t('productsPage.ctaButton')} <i className="fas fa-arrow-right" />
                    </ProductButton>
                  </ProductText>
                  <ProductImageContainer>
                    <ProductImage image={product.image} />
                  </ProductImageContainer>
                </>
              ) : (
                <>
                  <ProductImageContainer>
                    <ProductImage image={product.image} />
                  </ProductImageContainer>
                  <ProductText>
                    <h3>{product.name}</h3>
                    <ul>
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <ProductButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t('productsPage.ctaButton')} <i className="fas fa-arrow-right" />
                    </ProductButton>
                  </ProductText>
                </>
              )}
            </ProductContent>
          </ProductSection>
        ))}
      </Container>
    </ProductsPageContainer>
  );
};

export default PylonesPage;
