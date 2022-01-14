import { css } from "styled-components";
import { colors } from "./colors";

export const smallButton = css`
  font-size: 1em;
  padding: 0.25em 1em;
`;

export const largeButton = css`
  font-size: 1.05em;
  padding: 0.5em 1.25em;
`;

export const sharedButtonStyles = css`
  background: ${colors.SPACE_CADET};
  color: ${colors.PERIWINKLE};
  border: 2px solid ${colors.SPACE_CADET};
  border-radius: 3px;
  box-shadow: none;
`;
