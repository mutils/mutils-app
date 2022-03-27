import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    border-radius: ${({theme}) => theme.borderRadius};
    background: ${({theme}) => theme.button.primary};
    color: ${({theme}) => theme.text.color.primary};
    padding: 10px;
    border: none;
    margin-bottom: 5px;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: start;
    width: 100%;
    user-select: none;
`;