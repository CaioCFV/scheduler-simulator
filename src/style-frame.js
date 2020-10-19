import styled from 'styled-components';

export const ContainerProcess = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:flex-start;

    &[data-controls="true"] form{
        display:none;
    }

    &>*{
        flex:1;
    }
    form{
        max-width:300px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    font-size: 35px;
    margin: 50px 0px 40px;
`;

export const ContainerButtons = styled.section`
    margin:20px 0;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    padding:10px 0;

    form{
        margin-right:20px;
    }

    &[data-controls="true"] button{
        display:none;
    }
    button{
        max-width: 250px;
    }
    button+button{
        margin-left:20px;
    }

`;

export const ContainerGraph = styled.section`
    margin-bottom: 50vh;
    text-align:center;
   &[data-controls="false"]{
        display:none;
    }
    button{
        max-width:250px;
        margin: 0 20px 0px;
        display:inline-block;
    }   
    button[data-controls="true"] {
       pointer-events:none;
       opacity:0.5;
    }
`;
