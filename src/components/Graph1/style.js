import styled from 'styled-components';

export const Title = styled.h2`
    font-weight:700;
    font-size:25px;
`;

export const Square = styled.ul`
    height: 50px;
    width:100%;
    display:flex;
    margin:40px 0 80px;
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