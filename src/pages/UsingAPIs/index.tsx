import React from 'react';

import { H1, H2 } from 'src/components/Typography';
import { PageWrapper, PageContent } from 'src/components/Layout';
import {
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';
import UsersContainer from 'src/containers/UsersContainer';
import Map from 'src/components/Map';

export const UsingAPIs = () => {
    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock color='blue'>
                    <ContentWrapper>
                        <VerticalSpacer size='extraExtraLarge' />
                        <H1 color='white'>Using APIs</H1>
                        <VerticalSpacer size='large' />
                        <H2 color='white'>Random User Data</H2>
                        <VerticalSpacer size='medium' />
                        <UsersContainer />
                        <VerticalSpacer size='large' />
                        <Map />
                    </ContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default UsingAPIs;
