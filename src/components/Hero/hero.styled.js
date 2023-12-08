import styled from "styled-components";
import heroBg from "../../img/hero_bg.jpg";
import heroBg768 from "../../img/hero_bg768.jpg";
import heroBg1024 from "../../img/hero_bg1024.jpg";
import heroBg2560 from "../../img/hero_bg2560.jpg";

import { Button } from "../Button/button.styled";

const HeroWrapper = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  color: #fff;

  @media screen and (max-width: 767px) and (max-width: 2559px) {
    background-image: url(${heroBg});
  }
  @media screen and (min-width: 768px) and (max-width: 2559px) {
    background-image: url(${heroBg768});
  }
  @media screen and (min-width: 1024px) and (max-width: 2559px) {
    background-image: url(${heroBg1024});
  }

  @media screen and (min-width: 2560px) {
    background-color: #f8f8f8;
  }
`;
const HeroBackground = styled.div`
  @media screen and (min-width: 2560px) {
    background-image: url(${heroBg2560});
    max-width: 1170px;
    margin: 0 auto;
  }
`;

const HeroContainer = styled.div`
  @media screen and (min-width: 360px) {
    padding: 40px 16px 71px 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 88px 0;
    max-width: 380px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    padding: 163px 0;
    margin: 0 auto;
  }
`;

const HeroTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-bottom: 21px;
  line-height: 40px;
`;

const HeroDescription = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 26px;
`;

const BtnHero = styled(Button)`
  margin: 0 auto;
  margin-top: 32px;
`;

export {
  HeroWrapper,
  HeroBackground,
  HeroContainer,
  HeroTitle,
  HeroDescription,
  BtnHero,
};
