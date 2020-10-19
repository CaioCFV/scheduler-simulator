import styled from 'styled-components';

export const FormContainer = styled.form`
    margin-left: 25px;

    h2{
        font-weight:600;
        text-align:center;
        display:block;
        font-size:30px;
    }
    fieldset:nth-child(1),
    fieldset:nth-child(2),
    fieldset:nth-child(3){
        display:none;
    }
`;
