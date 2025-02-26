import styled from "styled-components";

export const ItemContainer = styled.div`
width: 80%;


@font-face {
  font-family: "Kailasa";
  src: url("../../assets/fonts/kailasa-bold.ttf") format("truetype");
}


h3 {
font-size: 32px;
color: #FAFAFA;
font-family: "Kailasa", sans-serif;
}

p {
font-size: 16px;
color: #FAFAFA60;
margin-bottom: 20px;
font-family: "Kailasa", sans-serif;
}

.acess {
max-width: 130px;

display: flex;
border: 1px solid #FAFAFA60;
border-radius: 12px;

background-color: #FAFAFA10;
color: #FFFFFF;
text-decoration: none;

padding: 5px 10px;

font-family: "Kailasa", sans-serif;
font-size: 14px;

}

a.remove {
max-width: 60px;

display: flex;
border: 1px solid #FAFAFA60;
border-radius: 12px;

background-color: #FA0040A0;
color: #FFFFFF;
text-decoration: none;

padding: 5px 10px;

font-family: "Kailasa", sans-serif;
font-size: 14px;

}

a.acess:hover{
background-color: #FAFAFA60;
}

a.remove:hover{
background-color: #FA0040; 
}

hr {
color: #FAFAFA60;
margin: 20px 0;}
`