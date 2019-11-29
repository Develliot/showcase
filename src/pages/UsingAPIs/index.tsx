import React from 'react';

import { H1, H2, Paragraph } from 'src/components/Typography';
import { Button } from 'src/components/Button';
import { TextInput } from 'src/components/TextInput';
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

                        <TextInput
                            name='location'
                            labelText='Enter a location'
                        />
                        <VerticalSpacer size='medium' />
                        <Button onClick={handleClick}>Find location</Button>
                        <VerticalSpacer size='medium' />
                        <Paragraph>co-oridnate string</Paragraph>
                    </ContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default UsingAPIs;
