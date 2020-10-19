import styled from 'styled-components';

export const Container = styled.header`
    color: #fff;
    font-size: 25px;
    display: block;
    text-align:center;
    border-bottom: 3px dashed #fff;
    padding-top:20px;
   
    &:focus{    
        border: 3px dashed #673AB7;
    }
    &:focus ~ label{
        top:0;
        font-size:20px;
        color:#673AB7;
    }
    a{
        height: 40px;
        line-height: 40px;
        text-decoration:none;
        text-transform:uppercase;
        padding:0px 20px;
    }
    a:hover{
        text-decoration:underline;
    }

    a + a{
        border-left: 3px dashed #fff;
    }
`;

export const Logo = styled.h1`
    color:#fff;
    font-size:30px;
    
   
    span{
        font-family: 'Roboto Mono', monospace;
        display:block;
        font-size:10px;
        text-align:center;
    }
    p{
        position:relative;
        margin-left:50px;
    }
    span:before{
        content: "";
        display: block;
        height: 1px;
        width:100px;
        margin: 3px auto 8px;
        background: repeating-linear-gradient(to left, transparent,#fff,transparent);
    }

`;
