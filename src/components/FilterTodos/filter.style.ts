import styled from "styled-components";

type ButtonProps = {
   primary?: boolean;
};

export const ButtonGroup = styled.div`
   display: flex;
   align-items: center;
   gap: 1.6rem;
`;

export const Button = styled.button(
   ({ primary }: ButtonProps) => `
      background: ${primary ? "dodgerblue" : "transparent"};
      color: ${primary ? "#fff" : "#000"};
      margin-left: ${primary ? "auto" : "none"};
      padding: 1rem;
      border: 0;
      cursor: pointer;

      &.active {
         background: dodgerblue;
         color: #fff;
         border-radius: 4px;
      }
`
);
