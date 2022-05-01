import styled from 'styled-components';

export const TxtRow = styled.div`
    display: flex;
    justify-content: center;
    transition: 0.3s;

    @media (max-width: 1800px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const Col25 = styled.div`
    width: 25%;
    margin-top: 100px;
    margin-left: 50px;
    transition: 0.3s;

    @media (max-width: 1800px) {
        width: 100%;
        margin: 0;
    }
`;

export const Col50 = styled.div`
    width: 50%;
    transition: 0.3s;

    @media (max-width: 1800px) {
        width: 100%;
        margin: 0;
    }
`;

export const AboutTxt = styled.p`
    text-align: center;
    font-size: 32px;
    margin-top: 100px;
    transition: 0.3s;
`;

export const ProfilePhoto = styled.img`
    display: block;
    max-width: 100%;
    max-height: 90%;
    height: auto;
    margin: 10px;
    transition: 0.3s;

    @media (max-width: 1800px) {
        width: 100%;
        margin: 0;
    }
`;
