import { icebreakers } from "../data/icebreakers";
import { randomListGroups } from "./random-list-groups";
import { getRandomIntegerInclusive } from "./get-random-integer";

const getIcebreakers = ({
  questionsPerGroup,
  allowLessThan,
  allowMoreThan,
  selectOneGroup
}) => {
  const icebreakerGroups = randomListGroups(
    icebreakers,
    questionsPerGroup,
    allowLessThan,
    allowMoreThan
  );
  if (selectOneGroup) {
    const randomlySelectedGroup = getRandomIntegerInclusive(
      0,
      icebreakerGroups.length - 1
    );
    const randomIcebreakers = icebreakerGroups[randomlySelectedGroup];
    return randomIcebreakers;
  }
  return icebreakerGroups;
};

module.exports = { getIcebreakers };
