import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  a{
    text-decoration: none;
    color:white;
  }

`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  input {
    padding: 9px;
    height: 25px;
    width: 25vw;
    font-size: 14px;
    border: none;
  }
`;

export const BtnSearch = styled.div`
background-color:white;
color:grey;
height: 40px;
width: 3vw;
border:none;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

export const Links = styled.div`


ul{
    display: flex;
    column-gap: 40px;
    list-style: none;
}
span{
    color:#ABABAB;
    font-size:23px;
}
li{
    cursor: pointer;
}

`
