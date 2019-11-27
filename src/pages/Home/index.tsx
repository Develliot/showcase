import React from 'react';

import { H1, H2, Paragraph } from 'src/components/Typography';
import { PageWrapper, PageContent } from 'src/pages/styles';
import AnitmatedContentWrapper from 'src/components/AnitmatedContentWrapper';
import {
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';
import { RobotAnimation } from 'src/components/RobotAnimation';

export const Home = () => {
    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock>
                    <ContentWrapper>
                        <VerticalSpacer size='extraExtraLarge' />
                        <H1> welcome</H1>
                        <VerticalSpacer size='large' />
                        <Paragraph>
                            Welcome to my front-end showcase. I originally
                            created this site to try out TypeScript instead of
                            using Flow. This was also an exersise to see if I
                            could make a website usinging pure functional
                            components and hooks withouut using classes and
                            their lifecycle functions.
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='blue' padding={false}>
                    <RobotAnimation />
                </ColorBlock>

                <ColorBlock color='darkGrey'>
                    <AnitmatedContentWrapper>
                        <H2 color='white'> under the hood</H2>

                        <VerticalSpacer size='medium' />
                        <Paragraph color='white'>
                            React
                            <br />
                            React Router
                            <br />
                            Typescript
                            <br />
                            Styled components
                            <br />
                            Prettier
                            <br />
                        </Paragraph>
                    </AnitmatedContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default Home;
