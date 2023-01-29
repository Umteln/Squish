import styled from 'styled-components';

export const Button = styled.button`
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: #f99f38;
    color: '#fff'

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

 &:disabled {
        backround-color: '#d9e3f0'
    }
`;
