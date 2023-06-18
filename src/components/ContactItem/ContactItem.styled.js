import styled from 'styled-components';
export const Item = styled.li`
    display:flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 15px;
    }
`;
export const ContactDetails = styled.p`
    font-family: cursive;
`;
export const Button = styled.button`
    background-color: red;
    color:white;
    padding: 3px 10px;
    border-radius: 10px;
    border: none;
    &:hover,:focus,:active{
        background-color: #7d0101;
    }
`;