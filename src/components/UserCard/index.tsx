import React from 'react';
import styled from 'styled-components/macro';

import { H3, Span, Paragraph } from 'src/components/Typography';
import { VerticalSpacer, RowCenter, ColumnCenter } from 'src/components/Layout';

const UserCardWrapper = styled.div`
    border-radius: 10px;
    overflow: hidden;
`;

const CoverColor = styled.div`
    background-color: ${({ color }) => color};
    width: 100%;
    height: 150px;
    position: relative;
`;

const BottomHalf = styled.div`
    background-color: ${({
        theme: {
            colors: { white },
        },
    }) => white};
    padding: ${({
        theme: {
            spacing: { medium, large },
        },
    }) => `${large} ${medium} ${medium} ${medium}`};
`;

const ImageWrapper = styled.div`
    height: 128px;
    width: 128px;
    border-radius: 6px;
    overflow: hidden;
    border: ${({
        theme: {
            colors: { lightGrey },
        },
    }) => `solid 1px ${lightGrey}`};
    position: absolute;
    bottom: -40px;
`;
const ImageContainer = styled.img`
    height: 128px;
    width: 128px;
`;

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
    user,
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
                <RowCenter>
                    <ColumnCenter>
                        <H3>
                            {first} {last}
                        </H3>
                        <VerticalSpacer size='small' />

                        <Paragraph>
                            <Span bold={true}>Email: </Span> {email}
                        </Paragraph>
                        <Paragraph>
                            <Span bold={true}>Street: </Span>{' '}
                            <Span>
                                {street.number} {street.name}
                            </Span>
                        </Paragraph>
                        <Paragraph>
                            <Span bold={true}>City: </Span> {city}
                        </Paragraph>
                        <Paragraph>
                            <Span bold={true}>State: </Span> {state}
                        </Paragraph>
                        <Paragraph>
                            <Span bold={true}>Postcode: </Span> {postcode}
                        </Paragraph>
                    </ColumnCenter>
                </RowCenter>
            </BottomHalf>
        </UserCardWrapper>
    );
};
