import { css } from "@emotion/react";

export const sm = (props) => {
    return css`
      @media only screen and (max-width: 600px) {
        ${props}
      }
    `;
  };