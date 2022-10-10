import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  box-shadow: 1px 1px 2px grey;
  position: fixed;
  height: 100%;
  top: 0px;
  width: 300px;
  left: ${(props) => (props.sideBar ? "0" : "-100%")};
  animation: showSidebar 0.4s;
  z-index: 100;
  display: flex;
  flex-direction: column;

  @keyframes showSideBar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const List = styled.div`
  a {
    list-style: none;
    text-decoration: none;
  }

  li {
    color: black;
    font-size: 25px;
    padding: 10px 0;
    width: 55%;
  }
  li:hover {
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 1px 1px 1px grey;
  }
`;

export const Profile = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  padding: 10px 0;
  img {
    width: 25%;
  }

  p {
    cursor: pointer;
    font-size: 15px;
  }
`;

export const BtnClose = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2px;
  cursor: pointer;
`;

export const Buttons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  margin-bottom: 10px;
  column-gap: 5px;
  
  button {
    font-style: none;
    width: 50%;
    height: 40px;
    cursor: pointer;
    a{ list-style: none;
    text-decoration: none;
  color:black;
font-weight:bold;}
   
  }

  button:first-child {
    background-color: white;
    border: 1px solid grey;
    border-radius: 30px;
  }
  button:first-child:hover {
    box-shadow: 1px 1px 1px black;
    color:white;
    border: 1px solid grey;
    background-color: #878d85;
  }

  button:last-child {
    background-color: green;
    color: white;
    border: none;
    border-radius: 30px;
  }
  button:last-child:hover {
    background-color: #88f375;
    color: grey;
    box-shadow: 1px 1px 1px grey;
  }
`;
