import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding: 20px;
  cursor: pointer;

  span {
    font-size: 15px;
  }

`;

export const Icons = styled.div`
cursor: pointer;
display: flex;
column-gap: 10px;
padding: 0 20px;
font-size:20px;

a{
  text-decoration: none;
  list-style: none;
  color:black;
}a:hover{
  color:grey;
}
`