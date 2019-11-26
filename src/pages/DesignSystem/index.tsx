import React from 'react';
import styled from 'styled-components/macro';

import { colors } from 'src/theme';
import { PageWrapper, PageContent } from 'src/pages/styles';
import {
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';
import { H1, H2, H3, Span, Paragraph } from 'src/components/Typography';

const colorLabelList = Object.keys(colors);

const TilesWrapper = styled.div`
    width: 100%;
    /* overflow: hidden; */
`;
const FlexWrapRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: ${({
        theme: {
            spacing: { small },
        },
    }) => `-${small}`};
`;

const ColorTileWrapper = styled.div`
    padding: ${({
        theme: {
            spacing: { small },
        },
    }) => small};
`;

const ColorTile = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px;
    padding: ${({
        theme: {
            spacing: { small, extraLarge },
        },
    }) => `${extraLarge} ${small} ${small} ${small}`};
    background-color: ${({ color }) => color};
    width: 170px;
`;

const ColorLabelWrapper = styled.div`
    background-color: ${({
        theme: {
            colors: { white },
        },
    }) => white};
    padding: ${({
        theme: {
            spacing: { tiny },
        },
    }) => tiny};
`;

const camelCaseToSentenceCase = (text: string): string => {
    const result = text.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
};

export const DesignSystem = () => {
    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock>
                    <VerticalSpacer size='extraExtraLarge' />
                    <ContentWrapper>
                        <VerticalSpacer size='extraLarge' />
                        <H1>Design System</H1>
                        <VerticalSpacer size='large' />
                        <H2>Colours</H2>
                        <VerticalSpacer size='large' />
                        <TilesWrapper>
                            <FlexWrapRow>
                                {colorLabelList.map(color => (
                                    <ColorTileWrapper key={color}>
                                        <ColorTile color={colors[`${color}`]}>
                                            <ColorLabelWrapper>
                                                <Span>
                                                    {camelCaseToSentenceCase(
                                                        color
                                                    )}
                                                    : {colors[`${color}`]}
                                                </Span>
                                            </ColorLabelWrapper>
                                        </ColorTile>
                                    </ColorTileWrapper>
                                ))}
                            </FlexWrapRow>
                        </TilesWrapper>

                        <VerticalSpacer size='extraExtraLarge' />

                        <H2>Typography</H2>
                        <VerticalSpacer size='large' />
                        <H1>H1 Example text</H1>
                        <VerticalSpacer size='large' />
                        <H2>H2 Example text</H2>
                        <VerticalSpacer size='large' />
                        <H3>H3 Example text</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph>Paragraph example text</Paragraph>
                    </ContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default DesignSystem;
