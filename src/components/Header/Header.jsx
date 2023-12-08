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

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={logo} />
        <FirmName src={firmName} />
      </LogoWrapper>
      <BtnsWrapper>
        <Button type="button">Users</Button>
        <Button type="button">Sign up</Button>
      </BtnsWrapper>
    </HeaderWrapper>
  );
};
