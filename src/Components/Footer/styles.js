import styled from 'styled-components'

export const CtnSuper = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

`

export const TopFooter = styled.div`
background-color: black;
border-bottom: 1px solid grey;
height: 45vh;
color:grey;
display: flex;
max-width: 100%;
width: 100%;

div{
    margin-top: 30px;
    width: 30%;
    padding: 0 50px;
}

ul{
    list-style: none;
}

h5{
    color:white;
    font-size: 15px;
}

p{

    row-gap: 10px;
}

a{
    text-decoration: none;
    color:grey;
}
`


export const BottomFooter = styled.div`
height: 20vh;
width: 100%;
color:white;
background-color: black;
display: flex;
align-items: center;
justify-content: space-between;
a{
    font-size: 30px;
    color:white;
}
`

export const Dev = styled.p`
color:white;
padding: 0 100px;
`

export const Links = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:0 20px;
padding: 0 150px;
`

