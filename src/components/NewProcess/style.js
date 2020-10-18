import styled from 'styled-components';

export const FormContainer = styled.form`
    background: #fff;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;

    fieldset:first-child{
        display:none;
    }

    fieldset:nth-child(2){
        grid-column: 1 / span 4;
    }

    button{
        grid-column: 1 / span 4;
    }
`;
