import styled from "styled-components";
import bgimg from "../../img/success-image.png";

const SuccessfullyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f8f8f8;
`;

const SuccessfullyTitle = styled.p`
  font-size: 40px;
  margin-bottom: 50px;
`;
const SuccessfullyImg = styled.div`
  width: 100%;
  height: 328px;
  background-image: url(${bgimg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export { SuccessfullyWrapper, SuccessfullyTitle, SuccessfullyImg };
