import React from 'react';

import { H1, H2 } from 'src/components/Typography';
import { PageWrapper, PageContent } from 'src/components/Layout';
import {
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';
import { Users } from 'src/components/Users';

export const UsingAPIs = () => {
    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock>
                    <ContentWrapper>
                        <VerticalSpacer size='extraExtraLarge' />
                        <H1>Using APIs</H1>
                        <VerticalSpacer size='large' />
                        <H2>Random User Data</H2>
                        <VerticalSpacer size='medium' />
                        <Users />
                    </ContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default UsingAPIs;
