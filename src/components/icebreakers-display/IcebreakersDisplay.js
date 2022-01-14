import styled from "styled-components";

import { colors } from "../../styles/colors";
import { GetNewQuestionsButton } from "./components/GetNewQuestionsButton";
import { IcebreakerGroup } from "./components/IcebreakerGroup";
import { IcebreakerGroups } from "./components/IcebreakerGroups";

const DisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: ${colors.AQUAMARINE};
`;

export default function IcebreakersDisplay({ icebreakers, startOver }) {
  if (!icebreakers || !icebreakers.length) {
    return (
      <div>
        <p>No Icebreakers Found, try again!</p>
        <GetNewQuestionsButton startOver={startOver} />
      </div>
    );
  }

  const isMultipleGroups = Array.isArray(icebreakers[0]);

  const IcebreakersToDisplay = isMultipleGroups ? (
    <IcebreakerGroups icebreakerGroups={icebreakers} />
  ) : (
    <IcebreakerGroup icebreakers={icebreakers} showGroupNumber={false} />
  );

  return (
    <div>
      <GetNewQuestionsButton startOver={startOver} />
      <DisplayWrapper>{IcebreakersToDisplay}</DisplayWrapper>
      {isMultipleGroups && <GetNewQuestionsButton startOver={startOver} />}
    </div>
  );
}
