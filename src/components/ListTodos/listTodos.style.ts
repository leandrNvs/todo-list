import styled from "styled-components";

type CheckProps = {
   isDone: boolean;
};

export const TodoListForm = styled.form`
   padding: 1rem 0;
   max-height: 60vh;
   overflow-y: auto;
   margin: 1.5rem 0;

   *::-webkit-scrollbar {
      width: 12px;
   }

   scrollbar-width: thin;
`;

export const TodoItem = styled.label`
   display: flex;
   align-items: center;
   gap: 1rem;
   font-size: 1.6rem;
   border-top: 1px solid #ccc;
   padding: 1rem 0;
`;

export const Check = styled.span(
   ({ isDone }: CheckProps) => `
   text-decoration: ${isDone ? "line-through" : "none"}
`
);

export const IconContainer = styled.div`
   margin-left: auto;
   font-size: 1.6rem;
   display: flex;
   gap: 1rem;
`;

export const Icon = styled.span`
   cursor: pointer;

   &:last-child {
      margin-right: 1rem;
   }

   &:hover {
      color: dodgerblue;
   }
`;
