import styled from "styled-components";
import { largeButton, sharedButtonStyles } from "../../../styles";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  ${sharedButtonStyles}
  ${largeButton}
`;

export const GetNewQuestionsButton = ({ startOver }) => (
  <ButtonContainer>
    <StyledButton onClick={startOver}>Get New Questions</StyledButton>
  </ButtonContainer>
);
