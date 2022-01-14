import styled from "styled-components";

const InputWrapper = styled.div`
  margin: 1rem 0;
`;

const Label = styled.label`
  display: ${(p) => (p.$showOnNewLine ? "block" : "auto")};
  margin-right: ${(p) => (p.$showOnNewLine ? "5px" : "0")};
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 1rem;
`;

const ErrorText = styled.span`
  color: red;
`;

export const Input = ({
  label = "",
  register,
  inputName,
  required,
  defaultValue = "",
  error = null,
  description,
  ...props
}) => (
  <InputWrapper>
    <Label $showOnNewLine={false}>{label}</Label>
    <input
      {...props}
      type="checkbox"
      defaultValue={defaultValue}
      {...register(inputName, { required })}
    />
    {error && error?.type === "required" && (
      <ErrorText>This field is required</ErrorText>
    )}
    {description && <Description>{description}</Description>}
  </InputWrapper>
);
