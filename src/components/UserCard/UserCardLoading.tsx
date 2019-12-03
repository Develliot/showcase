import React from 'react';

import { H3, Span, Paragraph } from 'src/components/Typography';
import { VerticalSpacer, RowCenter } from 'src/components/Layout';

import {
    UserCardWrapper,
    BottomHalf,
    LoadingCoverColor,
    LoadingImageWrapper,
    LoadingH3,
    LoadingParagraph,
    AnimatedRows,
} from './styles';

export const UserCardLoading = () => {
    return (
        <UserCardWrapper>
            <RowCenter>
                <LoadingCoverColor>
                    <RowCenter>
                        <LoadingImageWrapper />
                    </RowCenter>
                </LoadingCoverColor>
            </RowCenter>
            <BottomHalf>
                <VerticalSpacer size='small' />
                <AnimatedRows>
                    <LoadingH3 />
                </AnimatedRows>
                <VerticalSpacer size='medium' />
                <AnimatedRows>
                    <LoadingParagraph />
                    <LoadingParagraph />
                    <LoadingParagraph />
                    <LoadingParagraph />
                    <LoadingParagraph />
                </AnimatedRows>
            </BottomHalf>
        </UserCardWrapper>
    );
};
