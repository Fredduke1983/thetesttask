import styled from "styled-components";
import { Button } from "../Button/button.styled";

const PostUserWrapper = styled.section`
  padding: 0 16px;
  background-color: #f8f8f8;
`;
const PostTitle = styled.h2`
  font-size: 40px;
  line-height: 40px;
  text-align: center;
`;
const PostForm = styled.form`
  margin: 50px auto 0 auto;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    max-width: 380px;
  }
`;
const FormInputWrapper = styled.div`
  margin-bottom: 50px;
`;

const FormInput = styled.input`
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  height: 54px;
  border-radius: 4px;
  border: 1px solid #d0cfcf;
  color: #7e7e7e;
  font-size: 16px;
  line-height: 26px;
`;

const PhoneExample = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #7e7e7e;
  margin-left: 16px;
  margin-top: 4px;
`;

const InputRadioTitle = styled.h3`
  color: #000;
`;
const RadioInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  margin-top: 11px;
  margin-bottom: 47px;
`;
const FormLabelRadio = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const InputRadio = styled.input`
  position: relative;
  height: 20px;
  width: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid #00bdd3;
    box-sizing: border-box;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 11px;
    height: 10px;
    border-radius: 50%;
    background-color: #00bdd3;
    transform: translate(-48%, -50%);
    visibility: visible;
    box-sizing: border-box;
  }
`;

const UploadWrapper = styled.div`
  display: flex;
`;

const FormLabelUpload = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 54px;
  margin-bottom: 50px;
  border: 1px solid #000;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;

  input {
    display: none;
  }
`;
const UploadDescription = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;

  height: 54px;
  width: 75%;
  color: #7e7e7e;
  border: 1px solid #d0cfcf;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
`;

const FormButton = styled(Button)`
  background-color: #b4b4b4;

  margin: 0 auto;
  font-size: 16px;
  color: #fff;
`;

export {
  PostUserWrapper,
  PostTitle,
  PostForm,
  FormInputWrapper,
  FormLabelUpload,
  FormInput,
  PhoneExample,
  FormLabelRadio,
  InputRadioTitle,
  RadioInputWrapper,
  InputRadio,
  UploadWrapper,
  UploadDescription,
  FormButton,
};
