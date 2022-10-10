import styled from 'styled-components'

export const Card = styled.div`
  height: 56%;
  width: 20%;
  background-color: white;
    cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px #A4A3A3;
  &:hover{
    transition: all .5s;
    transform: scale(1.1) rotate(0.5deg)
  
  }
  a{
    text-decoration: none;
    color:black;
  }
`;

export const Img = styled.div`
img{
    width: 100%;
    height: 100px;
}
`

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
`

export const Category = styled.p`
font-size: 12px;
color: #A4A3A3;
text-align:center;

`
export const Title = styled.p`
text-align: center;
font-weight: 500;
`

export const Price = styled.p`
text-align: center;
font-weight: bold;
`