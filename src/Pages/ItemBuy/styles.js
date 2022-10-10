import styled from "styled-components";

export const Container = styled.p`
  height: 150vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  flex-direction: column;

`;
export const ContainerTop = styled.p`
  height: 100%;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  border-bottom: 1px solid grey;
  margin-bottom: 20px;
 
`;
export const CtnCenter = styled.div``;

export const Images = styled.div`
  width: 30%;
  height: 99%;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const TopImg = styled.div`
  width: 80%;
  height: 70%;
  padding: 10px 0;
  border-bottom: 1px solid #b9b9b9;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const BottomImgs = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 40%;
    width: 20%;
    border: 0.5px solid #b9b9b9;
    border-radius: 5px;
    padding: 3px;
    cursor: pointer;
  }
`;

export const Infs = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  flex-direction: column;



  h2 {
    font-size: 35px;
  }
`;

export const InfsItem = styled.div`
  border-top: 1px solid #b9b9b9;
  border-bottom: 1px solid #b9b9b9;
  display: flex;
  padding: 0 5px 15px 0;
`;

export const ButtonsInfs = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 25px;
  padding: 5px 20px;
  column-gap: 10px;
  background-color: white;
  box-shadow: 1px 1px 3px;

  button {
    background-color: black;
    border-radius: 30px;
    width: 30%;
    height: 18px;
    cursor: pointer;
  }
`;
export const Buy = styled.div`
  border-bottom: 1px solid #b9b9b9;
  padding: 5px 0;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 30px;
  }
`;
export const ButtonsBuy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
  }
  button:first-child {
    background-color: #42527d;
    color: white;
    font-weight: bold;
    font-size: 15px;
    padding: 8px 16px;
    border-radius: 30px;
    border: none;
    margin-right: 15px;
  }

  button:last-child {
    background-color: white;
    border: none;
    border-radius: 30px;
    color: #42527d;
    font-size: 20px;
    text-align: center;
    padding: 5px 10px;
    display: flex;
  }
`;
export const InfsPag = styled.span`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Wallet = styled.span`
  background-color: #15e36a;
  font-size: 30px;
  color: white;
  border-radius: 30px;
  padding: 3px 10px;
  text-align: center;
`;
export const TextWallet = styled.div`
  p {
    font-size: 10px;
    color: grey;
  }
`;

export const Cep = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  column-gap: 5px;

  span {
    margin-right: 10px;
  }

  input {
    height: 30px;
    width: 25%;
  }
`;

export const ButtonRefresh = styled.button`
  height: 34px;
  width: 8%;
  border: none;
  background-color: #dfdfdf;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7a7a7a;
  cursor: pointer;
  &:hover {
    background-color: #D6D6D6;
    color:black;
  }
`;

export const Description = styled.div`
width: 64%;
background-color: white;
border-radius: 5px;

`
export const TextDesc = styled.div`
padding: 0 15px;
p{
    color:grey;
}
`