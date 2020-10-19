import styled from 'styled-components';

export const Container = styled.section`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    min-height:100vh;
    padding:50px 0;
`;

export const Body = styled.section`
    display:flex;
    flex-direction:column;
    justify-content: center;
    width:100%;

    a{
        text-align: center;
        line-height: 57px;
        height: 60px;
        -webkit-text-decoration: none;
        text-decoration: none;
        display: block;
        margin: 15px auto;
        width: calc(100% - 15px);
        padding: 0;
        max-width: 500px;
        font-size:25px;
    }
`;


export const Logo = styled.h1`
    color:#fff;
    font-size:70px;
    margin-bottom:100px;
   
    span{
        font-family: 'Roboto Mono', monospace;
        display:block;
        font-size:15px;
        text-align:center;
    }
    p{
        position:relative;
        margin-left:150px;
    }
    span:before{
        content: "";
        display: block;
        height: 1px;
        width:450px;
        margin: 3px -20px 8px;
        background: repeating-linear-gradient(to left, transparent,#fff,transparent);
    }

`;


export const Footer = styled.footer`
    width:100%;
    text-align: center;
    &:before{
        content:"";
        display: block;
        height: 1px;
        width:calc(100% - 50px);
        max-width:400px;
        margin: 80px auto 20px auto;
        background: repeating-linear-gradient(to left, transparent,#fff,transparent);
    }
    &>div{
        display:flex;
        justify-content: center;
    }
    a+a{
        margin-left:10px;
    }
    svg{
        font-size:30px;
        color:#fff;
        text-decoration:none;
        opacity:0.5;
        transition:0.5s;
    }
    a:hover svg{
        opacity:1;
    }
`;