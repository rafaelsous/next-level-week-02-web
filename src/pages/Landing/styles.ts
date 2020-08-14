import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
  color: var(--color-text-in-primary);
  /* background-color: var(--color-primary); */
`;

const PageLandingContent = styled.div`
  width: 100vw;
  height: 65vh;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);

  @media(min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "footer footer footer"
    ;
  }
`;

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  @media(min-width: 1100px) {
    grid-area: logo;
    margin: 0;
    align-self: center;
    text-align: left;
  }
`;

const Logo = styled.img`
  height: 10rem;

  @media(min-width: 1100px) {
    height: 100%;
  }
`;

const Title = styled.div`
  margin-top: 0.8rem;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 4.6rem;

  @media(min-width: 1100px) {
    text-align: initial;
    font-size: 3.6rem;
  }
`;

const Hero = styled.img`
  width: 100%;
  object-fit: cover;

  @media(min-width: 1100px) {
    grid-area: hero;
    justify-content: end;
  }
`;

const Footer = styled.footer`
  width: 100vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: safe;
  /* align-items: center; */
  margin: 0 1rem;
  /* background: orange; */
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
`;

const GreetingsContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  
  flex-direction: column;
`;

const Greetings = styled.text`
  font-size: 1.6rem;
  color: var(--color-text-base);
`;

const GreetingsBold = styled.text`
  font-weight: bold;
`;

const TotalConnections = styled.span`
  display: flex;
  margin-top: 1.6rem;
  color: var(--color-text-complement);
  font-size: 1.2rem;
`;

const HeartIcon = styled.img`
  margin-left: 0.8rem;
`;

export {
  Container,
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
};