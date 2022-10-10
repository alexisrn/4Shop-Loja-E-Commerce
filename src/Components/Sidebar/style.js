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
  li:hover{
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
