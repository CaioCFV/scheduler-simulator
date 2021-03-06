import styled from 'styled-components';

export const Title = styled.h2`
    font-weight:700;
    font-size:25px;
    margin-top:50px;
`;

export const Square = styled.ul`
    height: 50px;
    width:100%;
    display:flex;
    margin:40px 0 80px;
    border-top: 2px dashed #fff;
    border-bottom: 2px dashed #fff;
`;

export const Item = styled.li`
    flex:1;
    height:100%;
    background:${props=>props.background};
    position:relative;
    
 
`;
export const Time = styled.span`
   position: absolute;
    right: 0;
    top: 77%;
    transform: translateY(-50%);

    i{
        position: relative;
        left: 4px;
        font-size: 20px;
    }

    &::before{
        content: "";
        width: 0px;
        border-right: 3px dashed #fff;
        height: 75px;
        display: block;
        margin-left: auto;
        margin-bottom: 5px;
    }
`;

export const ContainerTables = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;

    table:first-child{
        grid-column:1 / span 3;
    }
`;

export const Table = styled.table`
    color: var(--theme-color-4);
    margin: 0 auto 40px;

    h2{
        font-weight:600;
        text-align:center;
        display:block;
        font-size:30px;
    }

    th, td {
        border: 2px dashed #fff;
        padding: 5px 10px;
        text-align: center;
        font-size: 20px;

    }

    th {
        font-weight: 700;
        color: var(--theme-color-4);
        font-size: 17px;
    }
    
    i {
        width: 25px;
        height: 24px;
        display: block;
        margin: 0 auto;
    }
`;

export const Info = styled.div`
    position: absolute;
    bottom:125%;
    left: 50%;
    background: white;
    border:3px dashed black;
    padding:20px;
    text-align:left;
    opacity:0;
    visibility:hidden;
    transition:0.2s;
    width:220px;
    transform: translateX(-50%);
    p{
        color:black;
        margin: 10px 0;
    }
    &::after{
        content: "";
        position: absolute;
        width: 17px;
        height: 17px;
        background: white;
        display: block;
        transform: rotate(45deg);
        left: 45%;
        z-index: 0;
        bottom: -8px;
    
    }


`;