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
  line-height: 1.6;
  background: white;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 4rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    max-width: 800px;
    margin: 0 auto 30px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`;

const ProductSection = styled.section`
  margin-bottom: 80px;
`;

const ProductContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductText = styled.div`
  flex: 1;
  min-width: 300px;

  h3 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      width: 50px;
      height: 3px;
      background-color: #f39c12;
      bottom: -10px;
      left: 0;
    }
  }

  ul {
    margin-bottom: 30px;
  }

  li {
    margin-bottom: 12px;
    color: #555;
    position: relative;
    padding-left: 25px;
    font-size: 1.05rem;

    &:before {
      content: '•';
      color: #3498db;
      font-size: 1.8rem;
      position: absolute;
      left: 0;
      top: -7px;
    }
  }
`;

const ProductImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  position: relative;
  width: 550px;
  height: 550px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  border: 4px solid #3498db;
  margin: 0 auto;
  
  &:hover {
    border-color: #f39c12;
    transition: border-color 0.3s ease;
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  ${ProductImageContainer}:hover & {
    transform: scale(1.1);
  }
`;

const ProductButton = styled(motion.button)`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: #2980b9;
  }

  i {
    margin-left: 8px;
  }
`;

// Main Component
const PylonesPage = () => {
  const { t } = useTranslation();

  const productCategories = [
    {
      id: 'autoportants',
      name: t('productsPage.products.autoportants.title'),
      image: renforcementImage,
      features: t('productsPage.products.autoportants.features', { returnObjects: true })
    },
    {
      id: 'monotubes',
      name: t('productsPage.products.monotubes.title'),
      image: autoportantsImage,
      features: t('productsPage.products.monotubes.features', { returnObjects: true })
    },
    {
      id: 'speciaux',
      name: t('productsPage.products.speciaux.title'),
      image: speciauxImage,
      features: t('productsPage.products.speciaux.features', { returnObjects: true })
    },
    {
      id: 'renforcement',
      name: t('productsPage.products.renforcement.title'),
      image: monotubesImage,
      features: t('productsPage.products.renforcement.features', { returnObjects: true })
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
                      {t('productsPage.ctaButton')} <i className="fas fa-arrow-right"></i>
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
                      {t('productsPage.ctaButton')} <i className="fas fa-arrow-right"></i>
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