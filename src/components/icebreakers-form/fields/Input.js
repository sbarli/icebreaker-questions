import styled from "styled-components";

const typeIsInputField = (type) => {
  switch (type) {
    case "radio":
    case "checkbox":
      return false;
    default:
      return true;
  }
};

const InputWrapper = styled.div`
  margin: 1rem 0;
`;

const Label = styled.label`
  margin-left: ${(p) => (typeIsInputField(p.$inputType) ? "0" : "5px")};
  margin-right: ${(p) => (typeIsInputField(p.$inputType) ? "5px" : "0")};
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const StyledInput = styled.input`
  ${(p) => (typeIsInputField(p.type) ? "width: 3rem;" : "")}
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 0.9rem;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.9rem;
`;

export const Input = ({
  label = "",
  register,
  inputName,
  required,
  type = "text",
  defaultValue = "",
  error = null,
  description,
  ...props
}) => (
  <InputWrapper>
    {type !== "checkbox" && <Label $inputType={type}>{label}</Label>}
    <StyledInput
      {...props}
      type={type}
      defaultValue={defaultValue}
      {...register(inputName, { required })}
    />
    {type === "checkbox" && <Label $inputType={type}>{label}</Label>}
    {error && error?.type === "required" && (
      <ErrorText>This field is required</ErrorText>
    )}
    {description && <Description>{description}</Description>}
  </InputWrapper>
);
