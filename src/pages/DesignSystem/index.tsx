import React from 'react';

import { colors } from 'src/theme';
import { camelCaseToCaptilalisedCase } from 'src/utils/StringUtils';
import {
    PageWrapper,
    PageContent,
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';
import { H1, H2, H3, Span, Paragraph } from 'src/components/Typography';
import {
    TilesWrapper,
    ColorTile,
    ColorLabelWrapper,
    ColorTileWrapper,
    FlexWrapRow,
} from './styles';

const colorLabelList = Object.keys(colors);

export const DesignSystem = () => {
    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock>
                    <VerticalSpacer size='extraExtraLarge' />
                    <ContentWrapper>
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
                                                    {camelCaseToCaptilalisedCase(
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
                    </ContentWrapper>
                </ColorBlock>
                <ColorBlock color='pink'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H2 color='white'>Typography</H2>
                        <VerticalSpacer size='large' />
                        <H1 color='white'>H1 Example text</H1>
                        <VerticalSpacer size='large' />
                        <H2 color='white'>H2 Example text</H2>
                        <VerticalSpacer size='large' />
                        <H3 color='white'>H3 Example text</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph color='white'>
                            Paragraph example text
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default DesignSystem;
