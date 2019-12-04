import React from 'react';

import { H1, H2, H3, Paragraph } from 'src/components/Typography';
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

                <ColorBlock color='yellow'>
                    <ContentWrapper>
                        <VerticalSpacer size='extraExtraLarge' />
                        <H3>Data strategy</H3>
                        <VerticalSpacer size='medium' />
                        <Paragraph>
                            My aim was to use the context API as a data store,
                            and create a reusable hook for making the HTTP
                            requests. This was so components could observe the
                            store and wouldn't be strongly coupled any parent
                            components passing props the whole way down the
                            component hierarchy.
                        </Paragraph>
                        <Paragraph>
                            The user data comes from the https://randomuser.me/
                            random user generator API. The coordinates are a bit
                            random so I have had to transform them from a global
                            range to a UK range so point marks don't end up in
                            weird places. The maps are from google maps
                            Javascript API.
                        </Paragraph>
                        <VerticalSpacer size='large' />
                        <H3>Separating the data and display</H3>
                        <VerticalSpacer size='medium' />
                        <Paragraph>
                            The request itself is triggered by the
                            UsersContainer. The containers job is to perform the
                            request via the hook and pump data into a
                            userContext or pass error and loading states
                            directly to the visible component.
                        </Paragraph>
                        <VerticalSpacer size='large' />
                        <H3>Context API</H3>
                        <VerticalSpacer size='medium' />
                        <Paragraph>
                            I don't think something like Redux was required for
                            state management. Data from the URL request and the
                            carousel's currently selected User are stored in the
                            usersContext. The Map component knows which User
                            Marker to scroll to when the index of the carousel
                            changes by using the state from this context.
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default UsingAPIs;
