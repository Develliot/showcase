import React from 'react';

import { H1, H2, Paragraph } from 'src/components/Typography';
import { Button } from 'src/components/Button';
import { PageWrapper, PageContent } from 'src/components/Layout';
// import AnitmatedContentWrapper from 'src/components/AnitmatedContentWrapper';
import {
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';

export const UsingAPIs = () => {
    const handleClick = () => {};

    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock>
                    <ContentWrapper>
                        <VerticalSpacer size='extraExtraLarge' />
                        <H1>Using APIs</H1>
                        <VerticalSpacer size='large' />
                        <H2>Geocoding</H2>
                        <VerticalSpacer size='medium' />
                        <form>
                            <label>
                                Enter a location:
                                <input autofocus type='text' name='location' />
                            </label>
                            <Button onClick={handleClick}>Find location</Button>
                        </form>
                        <VerticalSpacer size='medium' />
                        <Paragraph>co-oridnate string</Paragraph>
                    </ContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default UsingAPIs;
