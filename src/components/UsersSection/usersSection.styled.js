import styled from "styled-components";
import { Button } from "../Button/button.styled";

const UserSectionBg = styled.div`
  background-color: #f8f8f8;
`;
const UsersSectionWrapper = styled.section`
  padding: 140px 16px;

  @media screen and (min-width: 768px) {
    padding: 140px 32px;
  }

  @media screen and (min-width: 1024px) {
    padding: 140px 60px;
  }

  @media screen and (min-width: 2560px) {
    padding: 140px 0;
    max-width: 1170px;
    margin: 0 auto;
  }

  @media screen and (min-width: 2560px) {
    background-color: #f8f8f8;
  }
`;

const UsersTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  margin-bottom: 50px;
`;

const UsersList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
  }

  @media screen and (min-width: 1024px) {
    gap: 29px;
  }
`;
const UserItem = styled.li`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 254px;
  background-color: #fff;
  border-radius: 10px;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    max-width: 344px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 282px;
  }

  @media screen and (min-width: 2560px) {
    max-width: 370px;
  }
`;

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const UserAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 26px;
`;

const ButtonShowMore = styled(Button)`
  margin: 50px auto 0 auto;
`;

const UserFullName = styled.p``;
const UserPosition = styled.p``;
const UserEmail = styled.p``;
const UserPhone = styled.p``;

export {
  UserSectionBg,
  UsersSectionWrapper,
  UsersTitle,
  UsersList,
  UserItem,
  Avatar,
  UserAboutWrapper,
  UserFullName,
  UserPosition,
  UserEmail,
  UserPhone,
  ButtonShowMore,
};
