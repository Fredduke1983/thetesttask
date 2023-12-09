import PropTypes from "prop-types";
import {
  HeroWrapper,
  HeroTitle,
  HeroDescription,
  BtnHero,
  HeroContainer,
  HeroBackground,
} from "./hero.styled";

export const Hero = ({ scrollToRegistration }) => {
  return (
    <HeroWrapper>
      <HeroBackground>
        <HeroContainer>
          <HeroTitle>Test assignment for front-end developer</HeroTitle>
          <HeroDescription>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they&apos;ll be building web interfaces with
            accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </HeroDescription>

          <BtnHero onClick={scrollToRegistration}>Sign Up</BtnHero>
        </HeroContainer>
      </HeroBackground>
    </HeroWrapper>
  );
};

Hero.propTypes = {
  scrollToRegistration: PropTypes.func,
};
