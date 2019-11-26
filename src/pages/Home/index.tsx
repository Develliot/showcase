import React from 'react';

import { H1, H2, Paragraph } from 'src/components/Typography';
import { PageWrapper, PageContent } from 'src/pages/styles';
import {
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';

export const Home = () => {
    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock>
                    <VerticalSpacer size='extraExtraLarge' />
                    <ContentWrapper>
                        <VerticalSpacer size='extraLarge' />
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

                <ColorBlock color='blue'>
                    <ContentWrapper>
                        <H2 color='white'> under the hood</H2>

                        <VerticalSpacer size='large' />
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
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='darkGrey'>
                    <ContentWrapper>
                        <H2 color='white'> under the hood</H2>

                        <VerticalSpacer size='large' />
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
                    </ContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default Home;
