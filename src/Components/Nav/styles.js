import styled from 'styled-components';

export const Container = styled.div`

//position: fixed;
background-color: white;
    width:flex;
    z-index: 100;
    display: flex;
    align-items: center;
    column-gap:10px;    
    padding: 10px 30px;

div{
    cursor: pointer;
    height: 100%;
}


`
export const Hamb = styled.div`
display: flex;
justify-content: center;
align-items: center;
&:hover{
    background-color: #EFEEEE;
    border-color: black;
    border-radius: 10px;
}

`