import styled from "styled-components";

const IcebreakerGroupWrapper = styled.div`
  background-color: white;
  border: 1px solid white;
  border-radius: 3px;
  max-width: 400px;
  padding: 0 1rem;
  margin: 2rem 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;
const IcebreakerGroupHeader = styled.h3``;
const QuestionList = styled.ol``;
const Question = styled.li``;

export const IcebreakerGroup = ({
  icebreakers,
  groupNumber,
  showGroupNumber = true
}) => (
  <IcebreakerGroupWrapper>
    {showGroupNumber && (
      <IcebreakerGroupHeader>Group {groupNumber}</IcebreakerGroupHeader>
    )}
    <QuestionList>
      {icebreakers.map((question, idx) => (
        <Question key={idx}>{question}</Question>
      ))}
    </QuestionList>
  </IcebreakerGroupWrapper>
);
