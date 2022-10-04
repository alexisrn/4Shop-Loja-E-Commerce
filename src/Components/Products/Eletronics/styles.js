import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items:center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 30px;
  margin-bottom: 100px;
  margin-top: 10px;

  Container:hover {
    transform: scale(1) rotate(2deg);
  }
`;

export const Card = styled.div`
  height: 50%;
  width: 20%;
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px #a4a3a3;

  &:hover {
    transition: all 0.5s;
    transform: scale(1.1) rotate(0.5deg);
  }
  a{
    text-decoration: none;
    color:black;
  }
`;

export const Img = styled.div`
  img {
    width: 100%;
    height: 100px;
  }
`;

export const CtnImg = styled.div`
  background-color: white;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 30px;
`;

export const CtnDescription = styled.div`
  background-color: white;
  width: 100%;
  height: 40%;
 
`;

export const Description = styled.p`
  font-size: 12px;
  color: #a4a3a3;
  padding: 0 0px;
  text-align: center;
`;
export const Title = styled.p`
  text-align: center;
  font-weight: 500;
`;

export const Price = styled.p`
  text-align: center;
  font-weight: bold;
`;
