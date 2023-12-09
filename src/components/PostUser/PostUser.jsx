import { useEffect, useState } from "react";
import { postUserFetch } from "../../fetches/postUserFetch";
import {
  FormButton,
  FormInput,
  FormInputWrapper,
  FormLabelRadio,
  FormLabelUpload,
  InputRadio,
  InputRadioTitle,
  PhoneExample,
  PostForm,
  PostTitle,
  PostUserWrapper,
  RadioInputWrapper,
  UploadDescription,
  UploadWrapper,
  ErrorText,
} from "./postUser.styled";
import { Successfully } from "../Successfully/Successfully";

export const PostUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position_id, setPosition_id] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [errorImg, setErrorImg] = useState("");
  const [isUploadedImg, setIsUploadedImg] = useState(false);
  const [isCorrectData, setIscorrectData] = useState(false);
  const [isNameCorrect, setIsNameCorrect] = useState(true);
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [isPhoneCorrect, setIsPhoneCorrect] = useState(true);
  const [isRadioChecked, setIsRadioChecked] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const namePattern = new RegExp(/^[a-zA-Z]{2,100}$/);
  const emailPattern = new RegExp(/^\w{2,20}@[a-zA-Z\d-]+\.[a-zA-Z]{2,4}$/);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phonePattern = new RegExp(/^[\\+]{0,1}380([0-9]{9})$/);

  useEffect(() => {
    if (
      isNameCorrect &&
      isEmailCorrect &&
      isPhoneCorrect &&
      name &&
      email &&
      phone &&
      isRadioChecked &&
      isUploadedImg
    ) {
      setIscorrectData(true);
    } else {
      setIscorrectData(false);
    }
    if (phone)
      if (phonePattern.test(phone)) {
        setIsPhoneCorrect(true);
      } else {
        setIsPhoneCorrect(false);
      }
  }, [
    email,
    isEmailCorrect,
    isNameCorrect,
    isPhoneCorrect,
    isRadioChecked,
    isUploadedImg,
    name,
    phone,
    phonePattern,
  ]);

  const handleRadioChange = (event) => {
    setIsRadioChecked(true);
    setPosition_id(event.target.value);
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", position_id);
    formData.append("photo", uploadFile);

    const response = await postUserFetch(formData);
    if (response.success) {
      for (const key of formData.keys()) {
        formData.delete(key);
      }
      setIsRegistered(true);
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  const onChangeUploadHandler = () => {
    const fileField = document.querySelector('input[type="file"]');
    setUploadFile(fileField.files[0]);
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        if (namePattern.test(name)) {
          setIsNameCorrect(true);
        } else {
          setIsNameCorrect(false);
        }
        break;

      case "email":
        setEmail(event.target.value);
        if (emailPattern.test(email)) {
          setIsEmailCorrect(true);
        } else {
          setIsEmailCorrect(false);
        }
        break;

      case "phone":
        setPhone(event.target.value);

        break;
    }
  };

  const onUploadFile = async (event) => {
    const file = event.target.files[0];
    setFileName(file.name);

    validateFile(file).then((res) => {
      if (res === "ok") {
        setIsUploadedImg(true);
      }
    });
  };

  const validateFile = (file) => {
    if (!file.type.startsWith("image/jpeg")) {
      setErrorImg("Файл повинен бути у форматі jpg/jpeg");
      return "Файл повинен бути у форматі jpg/jpeg";
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorImg("Розмір файлу повинен бути менше 5MB");
      return "Розмір файлу повинен бути менше 5MB";
    }

    const image = new Image();
    image.src = URL.createObjectURL(file);

    return new Promise((resolve, reject) => {
      image.onload = () => {
        const width = image.naturalWidth;
        const height = image.naturalHeight;

        if (width === 70 && height === 70) {
          setErrorImg(null);
          return resolve("ok");
        } else {
          setErrorImg("Розміри зображення повинні бути 70x70");
          reject("Розміри зображення повинні бути 70x70");
        }
      };
      image.onerror = () => {
        reject("Помилка при читанні зображення");
      };
    });
  };

  return (
    <>
      <PostUserWrapper>
        <PostTitle>Working with POST request</PostTitle>

        <PostForm onSubmit={(e) => onSubmitHandle(e)}>
          <FormInputWrapper>
            <FormInput
              className={isNameCorrect ? "" : "incorrect"}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
            {isNameCorrect ? null : (
              <ErrorText>Невірний формат імені</ErrorText>
            )}
          </FormInputWrapper>

          <FormInputWrapper>
            <FormInput
              className={isEmailCorrect ? "" : "incorrect"}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
            {isEmailCorrect ? null : (
              <ErrorText>Невірний формат емейлу</ErrorText>
            )}
          </FormInputWrapper>

          <FormInputWrapper>
            <FormInput
              className={isPhoneCorrect ? "" : "incorrect"}
              type="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
              placeholder="Phone"
            />
            <PhoneExample>+38 (XXX) XXX - XX - XX</PhoneExample>

            {isPhoneCorrect ? null : (
              <ErrorText>Невірний формат телефону</ErrorText>
            )}
          </FormInputWrapper>

          <InputRadioTitle>Select your position</InputRadioTitle>
          <RadioInputWrapper>
            <FormLabelRadio>
              <InputRadio
                type="radio"
                name="position"
                value="1"
                onChange={handleRadioChange}
              />
              Frontend developer
            </FormLabelRadio>

            <FormLabelRadio>
              <InputRadio
                type="radio"
                name="position"
                value="2"
                onChange={handleRadioChange}
              />
              Backend developer
            </FormLabelRadio>

            <FormLabelRadio>
              <InputRadio
                type="radio"
                name="position"
                value="4"
                onChange={handleRadioChange}
              />
              Designer
            </FormLabelRadio>

            <FormLabelRadio>
              <InputRadio
                type="radio"
                name="position"
                value="3"
                onChange={handleRadioChange}
              />
              QA
            </FormLabelRadio>
          </RadioInputWrapper>

          <UploadWrapper>
            <FormLabelUpload
              className={errorImg ? "errorImg" : ""}
              onChange={onChangeUploadHandler}
            >
              <FormInput onChange={onUploadFile} required type="file" />
              Upload
            </FormLabelUpload>
            <UploadDescription
              className={errorImg ? "errorImg" : ""}
              value={fileName}
              placeholder="Upload your photo"
              disabled={true}
            />
            {errorImg ? <ErrorText>{errorImg}</ErrorText> : null}
          </UploadWrapper>

          <FormButton
            type="submit"
            className={isCorrectData ? "" : "disabled"}
            disabled={isCorrectData ? false : true}
          >
            Sign up
          </FormButton>
        </PostForm>
      </PostUserWrapper>
      {isRegistered && <Successfully />}
    </>
  );
};
