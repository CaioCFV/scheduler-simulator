import styled from 'styled-components';

export const Table = styled.table`
    color: var(--theme-color-4);
    width: 100%;
    margin-top:50px;

    h2{
        font-weight:600;
        text-align:center;
        display:block;
        font-size:30px;
    }

    th, td {
        border: 3px dashed #fff;
        padding: 15px 10px;
        text-align: center;
        font-size:25px;
    }

    th {
        font-weight: 700;
        color: var(--theme-color-4);
        font-size:20px;
    }
    
    i {
        width: 25px;
        height: 24px;
        display: block;
        margin: 0 auto;
    }
`;

export const Status = styled.td`
    color:${props=> props.status == 'false' ? 'red' : 'green'};
`;