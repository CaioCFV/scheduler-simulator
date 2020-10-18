import styled from 'styled-components';

export const Table = styled.table`
    border: 3px solid #5d468c;
    height: 50px;
    border-radius: 5px;
    color: var(--theme-color-4);
    width: 100%;
    background: #fff;


    th, td {
        border: 1px solid #ddd;
        padding: 15px 10px;
        text-align: center;
    }

    th {
        font-weight: 700;
        color: var(--theme-color-4);
    }
`;
