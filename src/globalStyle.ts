import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
   }

   html {
      font-size: 10px;
   }

   body {
      font-family: sans-serif;
   }

   #root {
      height: 100vh;
      width: 100%;
      background-color: dodgerblue;
      overflow: hidden;
   }
`;

export const Container = styled.div`
   background-color: #fff;
   width: fit-content;
   margin: 2rem auto;
   border-radius: 4px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
   padding: 1rem 4rem;

   @media (max-width: 400px) {
      margin: 2rem auto;
      padding-left: 1rem;
      padding-right: 1rem;
   }
`;
