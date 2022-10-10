import styled from 'styled-components'

export const Container = styled.div`

width: 100%;
`


export const Footer = styled.div`
background-color: black;
width: 100%;
height: 300px;
display: flex;
align-items: center;
flex-direction: column;
color:white;

`

export const CtnTop = styled.div`
background-color: black;
width: 100%;
height: 300px;
display: flex;
align-items: center;
div{
    width: 50%;
    height: 90%;
    
}
a{
    text-decoration: none;
    color: white;
}

h5{
    color:grey;
}

`

export const CtnBot = styled.div`
border-top: 1px solid #b9b9b9;
width: 100%;
height: 30vh;
display: flex;
justify-content: space-around;
align-items: center;
`
export const Icons = styled.div`
font-size: 20px;
color:black;
a{
    color:white;
    padding:10px;
}
`