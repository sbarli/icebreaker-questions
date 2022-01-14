import { IcebreakerGroup } from "./IcebreakerGroup";

export const IcebreakerGroups = ({ icebreakerGroups }) => (
  <div>
    {icebreakerGroups.map((group, idx) => (
      <IcebreakerGroup key={idx} icebreakers={group} groupNumber={idx + 1} />
    ))}
  </div>
);
