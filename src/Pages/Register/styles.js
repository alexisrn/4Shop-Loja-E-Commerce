import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
row-gap: 10px;
`

export const CtnRegister = styled.div`
 background-color: white;
  height: 80%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width:499px){
    width: 80vw;
  }
`
export const HeadRegister = styled.div`
  background-color: white;
  border: 5px solid white;
  border-bottom: 1px solid #b9b9b9;
  border-radius: 10px 10px 0 0;
  width: 100%;
  p {
    padding: 0 20px;
  }
  p:first-child {
    font-weight: bold;
    font-size: 20px;
  }
  p:last-child {
    color: #b9b9b9;
    font-size: 12px;
    margin-bottom: 30px;
  }@media (max-width:499px){
    width: 80vw;
  }
`;
export const InputLogin = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  border: 5px solid white;
  border-radius: 0 0 10px 10px;
  div {
    padding: 0 20px;
  }
  p {
    font-size: 13px;
    color: #b9b9b9;
  }
  input {
    height: 6vh;
    width: 100%;
    border: 1px solid #b9b9b9;
    border-radius: 5px;
    font-size: 15px;
    background-color: #f3f3f3;
  }@media (max-width:499px){
    width: 80vw;
  }
`;

export const BottomCtn = styled.div`
  margin-top: 50px;
  text-align: center;

  button {
    cursor: pointer;
    background-color: black;
    color: white;
    border-radius: 20px;
    border: none;
    padding: 10px 30px;
    font-size: 15px;
    font-weight: bold;
  }
  button:hover {
    background-color: grey;
  }
  p {
    cursor: pointer;
    margin-top: 30px;
    color: black;
  }
`;

export const Register = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 5px solid white;
 
  div {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p{
    cursor: pointer;
    font-size: 14px;
  }
  a{
    text-decoration: none;
    color:black;
  }`

  export const MsgError = styled.p`
  text-align: center;
  color:red;
  font-weight: bold;
  `