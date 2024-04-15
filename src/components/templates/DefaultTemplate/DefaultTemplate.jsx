import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer';

import { Wrapper, ButtonWrapper } from './styled';

const DefaultTemplate = ({ children }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
    const handleButtonVisibility = () => {
        window.scrollY > 0 ? setIsButtonVisible(true) : setIsButtonVisible(false);
    }

    useEffect(() => {
        document.addEventListener('scroll', handleButtonVisibility);
        return () => document.removeEventListener('scroll', handleButtonVisibility);
    }, []);

  const scrollToTop = () => {
      window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />

      <Wrapper>{children}</Wrapper>

      {isButtonVisible && (
        <ButtonWrapper>
          <Button variant="info" onClick={scrollToTop}>Наверх</Button>
        </ButtonWrapper>
      )}

      <Footer />
    </>
  )
}

export default DefaultTemplate;
