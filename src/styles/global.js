import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Montserrat:wght@400;800&display=swap");
  * {
    margin: 0;
    padding: 0;
    font-size: 100%;
    box-sizing: border-box;
    font-family: Montserrat, Arial, -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", Helvetica, sans-serif;
  }
  body,
  html {
    background-color: #131313;
  }
  button {
    outline: none;
    cursor: pointer;
    border: none;
  }
`;

export const Container = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 10px;
`;
