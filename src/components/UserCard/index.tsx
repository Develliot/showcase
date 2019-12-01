import React from 'react';

import { H3, Span, Paragraph } from 'src/components/Typography';
import { VerticalSpacer, RowCenter, ColumnCenter } from 'src/components/Layout';

import {
    UserCardWrapper,
    CoverColor,
    ImageWrapper,
    ImageContainer,
    BottomHalf,
} from './styles';

export type UserType = {
    name: { first: string; last: string };
    login: { uuid: string };
    picture: { large: string };
    email: string;
    location: {
        street: { number: string; name: string };
        city: string;
        state: string;
        postcode: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
    };
};

type Props = {
    user: UserType;
    color: string;
};

export const UserCard = ({
    user: {
        name: { first, last },
        picture,
        email,
        location: { street, city, state, postcode },
    },
    color,
}: Props) => {
    return (
        <UserCardWrapper>
            <RowCenter>
                <CoverColor color={color}>
                    <RowCenter>
                        <ImageWrapper>
                            <ImageContainer src={picture.large} />
                        </ImageWrapper>
                    </RowCenter>
                </CoverColor>
            </RowCenter>
            <BottomHalf>
                <VerticalSpacer size='small' />
                <H3>
                    {first} {last}
                </H3>
                <VerticalSpacer size='small' />
                <Paragraph ellipsis={true}>
                    <Span bold={true}>Email: </Span> {email}
                </Paragraph>
                <Paragraph ellipsis={true}>
                    <Span bold={true}>Street: </Span>{' '}
                    <Span>
                        {street.number} {street.name}
                    </Span>
                </Paragraph>
                <Paragraph ellipsis={true}>
                    <Span bold={true}>City: </Span> {city}
                </Paragraph>
                <Paragraph ellipsis={true}>
                    <Span bold={true}>State: </Span> {state}
                </Paragraph>
                <Paragraph ellipsis={true}>
                    <Span bold={true}>Postcode: </Span> {postcode}
                </Paragraph>
            </BottomHalf>
        </UserCardWrapper>
    );
};
