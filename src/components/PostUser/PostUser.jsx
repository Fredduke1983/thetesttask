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
} from "./postUser.styled";

export const PostUser = () => {
  return (
    <PostUserWrapper>
      <PostTitle>Working with POST request</PostTitle>

      <PostForm>
        <FormInputWrapper>
          <FormInput
            type="text"
            name="name"
            // className={css.formInput}
            // value={formData.name}
            // onChange={handleChange}
            required
            placeholder="Your name"
          />
        </FormInputWrapper>

        <FormInputWrapper>
          <FormInput
            type="email"
            name="email"
            // className={css.formInput}
            // value={formData.email}
            // onChange={handleChange}
            required
            placeholder="Email"
          />
        </FormInputWrapper>

        <FormInputWrapper>
          <FormInput
            type="phone"
            name="phone"
            // className={css.formInput}
            // value={formData.email}
            // onChange={handleChange}
            required
            placeholder="Phone"
          />
          <PhoneExample>+38 (XXX) XXX - XX - XX</PhoneExample>
        </FormInputWrapper>

        <InputRadioTitle>Select your position</InputRadioTitle>
        <RadioInputWrapper>
          <FormLabelRadio>
            <InputRadio type="radio" name="position" />
            Frontend developer
          </FormLabelRadio>

          <FormLabelRadio>
            <InputRadio type="radio" name="position" />
            Backend developer
          </FormLabelRadio>

          <FormLabelRadio>
            <InputRadio type="radio" name="position" />
            Designer
          </FormLabelRadio>

          <FormLabelRadio>
            <InputRadio type="radio" name="position" />
            QA
          </FormLabelRadio>
        </RadioInputWrapper>

        <UploadWrapper>
          <FormLabelUpload>
            <FormInput type="file" />
            Upload
          </FormLabelUpload>
          <UploadDescription>Upload your photo</UploadDescription>
        </UploadWrapper>

        <FormButton type="submit">Sign up</FormButton>
      </PostForm>
    </PostUserWrapper>
  );
};
