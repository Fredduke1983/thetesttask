import PropTypes from "prop-types";

import {
  BtnsWrapper,
  FirmName,
  HeaderWrapper,
  Logo,
  LogoWrapper,
} from "./header.styled";
import logo from "../../img/cat.svg";
import firmName from "../../img/name.svg";
import { Button } from "../Button/button.styled";

export const Header = ({ scrollToUsers, scrollToRegistration }) => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={logo} />
        <FirmName src={firmName} />
      </LogoWrapper>
      <BtnsWrapper>
        <Button type="button" onClick={scrollToUsers}>
          Users
        </Button>
        <Button type="button" onClick={scrollToRegistration}>
          Sign up
        </Button>
      </BtnsWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  scrollToRegistration: PropTypes.func,
  scrollToUsers: PropTypes.func,
};
