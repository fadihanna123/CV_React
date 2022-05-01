import styled from 'styled-components';

export const Icon = styled.img`
    max-width: 15px;
    max-height: 15px;
    width: auto;
    height: auto;
    display: inline-block;
    transition: 0.3s;
`;

export const Col = styled.div`
    width: 15%;
    font-weight: bold;
    line-height: 2em;
    transition: 0.3s;

    @media (max-width: 1800px) {
        width: 100%;
        text-align: center;
    }
`;
