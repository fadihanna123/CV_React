import styled from 'styled-components';

export const Icon = styled.img`
    max-width: 40px;
    max-height: 40px;
    margin-top: 20px;
    width: auto;
    height: auto;
    transition: 0.3s;
`;

export const FooterBlock = styled.footer`
    background: #f5f5f5;
    text-align: center;
    font-style: italic;
    transition: 0.3s;
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    transition: 0.3s;

    @media (max-width: 1800px) {
        flex-direction: column;
    }
`;

export const Col = styled.div`
    width: 20%;
    transition: 0.3s;

    @media (max-width: 1800px) {
        width: 100%;
    }
`;
