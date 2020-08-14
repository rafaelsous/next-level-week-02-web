import React from 'react';

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  Logo,
  Title,
  Hero,
  Footer,
  ButtonsContainer,
  GreetingsContainer,
  Greetings,
  GreetingsBold,
  TotalConnections,
  HeartIcon,
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import LinkButton from '../../components/LinkButton';

const Landing: React.FC = () => {
  return (
    <>
      <PageLanding>
        <PageLandingContent>
          <LogoContainer>
            <Logo src={logoImg} alt="Proffy" />
            <Title>Sua plataforma de estudos online</Title>
          </LogoContainer>

          <Hero src={landingImg} alt="Plataforma de estudos" />
        </PageLandingContent>

        <Footer>
          {/* <FooterContainer> */}
          <ButtonsContainer>
            <LinkButton
              to="/study"
              label="Estudar"
              icon={studyIcon}
              primary
            />

            <LinkButton
              to="/study"
              label="Estudar"
              icon={giveClassesIcon}
            />
          </ButtonsContainer>

          <GreetingsContainer>
            <Greetings>
              Seja bem-vindo! {' '}
              <GreetingsBold>O que deseja fazer?</GreetingsBold>
            </Greetings>

            <TotalConnections>
              Total de {/* {totalConnections} */} 285 conexões já realizadas
              <HeartIcon src={purpleHeartIcon} alt="coração roxo" />
            </TotalConnections>
          </GreetingsContainer>

          {/* </FooterContainer> */}
        </Footer>
      </PageLanding>
    </>
  );
}

export default Landing;