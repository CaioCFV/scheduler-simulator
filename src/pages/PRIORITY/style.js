import styled from 'styled-components';

export const ContainerProcess = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:flex-start;

    &>*{
        flex:1;
    }
    form{
        max-width:300px;
    }
`;

export const ContainerButtons = styled.section`
    margin:20px 0;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px 0;

    &[data-controls="true"] button{
        display:none;
    }
    button{
        max-width:400px;
    }
`;

export const ContainerGraph = styled.section`
   &[data-controls="false"]{
        display:none;
    }
    button{
        max-width:400px;
        margin: 0 auto;
        display:block;
    }   
`;
