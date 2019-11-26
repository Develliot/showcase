import React from 'react';
import styled from 'styled-components/macro';

import { colors } from 'src/theme';
import { PageWrapper, PageContent, ContentWrapper } from 'src/pages/styles';
import { H1, H2 } from 'src/components/Typography';

const colorLabelList = Object.keys(colors);

const FlexWrapRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
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
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px;
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

const Paragraph = styled.p`
    color: ${({
        theme: {
            colors: { darkGrey },
        },
    }) => darkGrey};
    padding: 0;
    margin: 0;
`;

const camelCaseToSentenceCase = (text: string): string => {
    const result = text.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
};

export const DesignSystem = () => {
    return (
        <PageWrapper>
            <PageContent>
                <ContentWrapper>
                    <H1>Design System</H1>
                    <H2>Colors</H2>
                    <FlexWrapRow>
                        {colorLabelList.map(color => (
                            <ColorTileWrapper key={color}>
                                <ColorTile color={colors[`${color}`]}>
                                    <ColorLabelWrapper>
                                        <Paragraph>
                                            {camelCaseToSentenceCase(color)}:{' '}
                                            {colors[`${color}`]}
                                        </Paragraph>
                                    </ColorLabelWrapper>
                                </ColorTile>
                            </ColorTileWrapper>
                        ))}
                    </FlexWrapRow>
                </ContentWrapper>
            </PageContent>
        </PageWrapper>
    );
};

export default DesignSystem;
