import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  height: 60px;
  font-size: 16px;

  @media screen and (min-width: 360px) {
    padding: 13px 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 13px 32px;
  }
  @media screen and (min-width: 1024px) {
    padding: 13px 60px;
  }
  @media screen and (min-width: 2560px) {
    padding: 13px 695px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  width: 104px;
  height: 26px;
`;
const Logo = styled.img``;
const FirmName = styled.img``;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export { LogoWrapper, Logo, FirmName, HeaderWrapper, BtnsWrapper };
