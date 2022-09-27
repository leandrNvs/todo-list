import styled from "styled-components";

export const CreateTodosForm = styled.form`
   padding: 1rem 0;
`;

export const TodosInput = styled.input`
   border: 0;
   border: 1px solid #ccc;
   border-radius: 4px;
   font-size: 1.8rem;
   padding: 1rem;
   width: 350px;
   color: #626262;

   @media (max-width: 500px) {
      width: 100%;
      font-size: 1.5rem;
   }

   &:focus {
      border-color: dodgerblue;
   }
`;
