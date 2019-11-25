import React from 'react';
import styled from 'styled-components';
import { tsPropertySignature } from '@babel/types';

const HomeWrapper = styled.div`
    padding: 20px;
    background-color: ${({
        theme: {
            colors: { pink },
        },
    }) => pink};
`;

export const Home = () => {
    return <HomeWrapper>Under construction</HomeWrapper>;
};

export default Home;
