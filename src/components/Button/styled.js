import styled from "styled-components";

export const ButtonContainer = styled.button`
  
  @font-face {
  font-family: "Kailasa";
  src: url("../../assets/fonts/kailasa-bold.ttf") format("truetype");
  }

  font-family: "Kailasa", sans-serif;
  font-size: 16px;
  color: #FFFFFF;

  border: 1px solid #FAFAFA;
  border-radius: 20px;
  background-color: #FAFAFA60;

  min-height: 62px;
  width: 50%;

  margin: 50px;

  &:hover {
    background-color: #FAFAFA90;
    cursor: pointer;
  }
`;