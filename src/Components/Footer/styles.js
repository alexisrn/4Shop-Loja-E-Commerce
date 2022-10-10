import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Footer = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

export const CtnTop = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  div {
    width: 50%;
    height: 90%;
  }
  a {
    text-decoration: none;
    color: white;
  }

  h5 {
    color: grey;
  }

  @media (max-width: 498px) {
    display: flex;
    flex-direction: column;
  }
`;

