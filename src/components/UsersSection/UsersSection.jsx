import {
  Avatar,
  ButtonShowMore,
  UserAboutWrapper,
  UserEmail,
  UserFullName,
  UserItem,
  UserPhone,
  UserPosition,
  UserSectionBg,
  UsersList,
  UsersSectionWrapper,
  UsersTitle,
} from "./usersSection.styled";
import ava from "../../img/ava.png";

export const UsersSection = () => {
  return (
    <UserSectionBg>
      <UsersSectionWrapper>
        <UsersTitle>Working with GET request</UsersTitle>

        <UsersList>
          <UserItem>
            <Avatar src={ava}></Avatar>
            <UserFullName>Salvador Stewart Flynn Thomas Salva...</UserFullName>
            <UserAboutWrapper>
              <UserPosition>
                Leading specialist of the department o...
              </UserPosition>
              <UserEmail>JeromeKlarkaJeromeKlarka19233623...</UserEmail>
              <UserPhone>+38 (098) 278 76 24</UserPhone>
            </UserAboutWrapper>
          </UserItem>
          <UserItem>
            <Avatar src={ava}></Avatar>
            <UserFullName>Salvador Stewart Flynn Thomas Salva...</UserFullName>
            <UserAboutWrapper>
              <UserPosition>
                Leading specialist of the department o...
              </UserPosition>
              <UserEmail>JeromeKlarkaJeromeKlarka19233623...</UserEmail>
              <UserPhone>+38 (098) 278 76 24</UserPhone>
            </UserAboutWrapper>
          </UserItem>
          <UserItem>
            <Avatar src={ava}></Avatar>
            <UserFullName>Salvador Stewart Flynn Thomas Salva...</UserFullName>
            <UserAboutWrapper>
              <UserPosition>
                Leading specialist of the department o...
              </UserPosition>
              <UserEmail>JeromeKlarkaJeromeKlarka19233623...</UserEmail>
              <UserPhone>+38 (098) 278 76 24</UserPhone>
            </UserAboutWrapper>
          </UserItem>
          <UserItem>
            <Avatar src={ava}></Avatar>
            <UserFullName>Salvador Stewart Flynn Thomas Salva...</UserFullName>
            <UserAboutWrapper>
              <UserPosition>
                Leading specialist of the department o...
              </UserPosition>
              <UserEmail>JeromeKlarkaJeromeKlarka19233623...</UserEmail>
              <UserPhone>+38 (098) 278 76 24</UserPhone>
            </UserAboutWrapper>
          </UserItem>
          <UserItem>
            <Avatar src={ava}></Avatar>
            <UserFullName>Salvador Stewart Flynn Thomas Salva...</UserFullName>
            <UserAboutWrapper>
              <UserPosition>
                Leading specialist of the department o...
              </UserPosition>
              <UserEmail>JeromeKlarkaJeromeKlarka19233623...</UserEmail>
              <UserPhone>+38 (098) 278 76 24</UserPhone>
            </UserAboutWrapper>
          </UserItem>
          <UserItem>
            <Avatar src={ava}></Avatar>
            <UserFullName>Salvador Stewart Flynn Thomas Salva...</UserFullName>
            <UserAboutWrapper>
              <UserPosition>
                Leading specialist of the department o...
              </UserPosition>
              <UserEmail>JeromeKlarkaJeromeKlarka19233623...</UserEmail>
              <UserPhone>+38 (098) 278 76 24</UserPhone>
            </UserAboutWrapper>
          </UserItem>
        </UsersList>
        <ButtonShowMore>Show more</ButtonShowMore>
      </UsersSectionWrapper>
    </UserSectionBg>
  );
};
