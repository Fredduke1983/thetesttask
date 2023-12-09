import { useState } from "react";
import { Report } from "notiflix/build/notiflix-report-aio";
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
import blankImg from "../../img/blank_img.svg";
import { getUsersFetch } from "../../fetches/getUsersFetch";

export const UsersSection = () => {
  const PAGE = 1;
  const COUNT = 4;
  const MAX_LENGTH = 20;

  const [users, setUsers] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [usersPage, setUsersPage] = useState(PAGE);
  const [dataUsers, setDataUsers] = useState({});

  if (isFirstLoad) {
    const response = getUsersFetch(usersPage, COUNT);
    response.then((usersObj) => {
      setDataUsers(usersObj);
      setUsers(usersObj.users);
    });
    setIsFirstLoad(false);
  }

  const BtnShowMore = () => {
    setUsersPage(usersPage + 1);
    let p = usersPage + 1;

    if (p < dataUsers.total_pages) {
      const response = getUsersFetch(p, COUNT);
      response.then((usersObj) => {
        setDataUsers(usersObj);
        setUsers([...users, ...usersObj.users]);
      });
    } else {
      Report.info("Більше нема контактів.");
    }
  };

  return (
    <UserSectionBg>
      <UsersSectionWrapper>
        <UsersTitle>Working with GET request</UsersTitle>

        <UsersList>
          {users.map((user) => {
            return (
              <UserItem key={user.id}>
                <Avatar src={user.photo ? user.photo : blankImg} />
                <UserFullName>
                  {user.name.length > MAX_LENGTH
                    ? user.name.substring(0, MAX_LENGTH) + "..."
                    : user.name}
                </UserFullName>
                <UserAboutWrapper>
                  <UserPosition>
                    {user.position.length > MAX_LENGTH
                      ? user.position.substring(0, MAX_LENGTH) + "..."
                      : user.position}
                  </UserPosition>
                  <UserEmail>
                    {user.email.length > MAX_LENGTH
                      ? user.email.substring(0, MAX_LENGTH) + "..."
                      : user.email}
                  </UserEmail>
                  <UserPhone>{user.phone}</UserPhone>
                </UserAboutWrapper>
              </UserItem>
            );
          })}
        </UsersList>
        <ButtonShowMore onClick={BtnShowMore}>Show more</ButtonShowMore>
      </UsersSectionWrapper>
    </UserSectionBg>
  );
};
