import React from 'react';
import styled from 'styled-components/macro';
import { H3 } from 'src/components/Typography';
import { VerticalSpacer, RowCenter } from 'src/components/Layout';

const UserCardWrapper = styled.div``;
const ImageWrapper = styled.div`
    height: 128px;
    width: 128px;
    border-radius: 6px;
    overflow: hidden;
`;
const ImageContainer = styled.img`
    height: 128px;
    width: 128px;
`;

export type UserType = {
    name: { first: string; last: string };
    login: { uuid: string };
    picture: { large: string };
    coordinates: {
        latitude: number;
        longitude: number;
    };
};

type Props = {
    user: UserType;
};

export const UserCard = ({
    user: {
        name: { first, last },
        picture,
    },
}: Props) => {
    return (
        <UserCardWrapper>
            <RowCenter>
                <ImageWrapper>
                    <ImageContainer src={picture.large} />
                </ImageWrapper>
            </RowCenter>
            <VerticalSpacer size='small' />
            <RowCenter>
                <H3>
                    {first} {last}
                </H3>
            </RowCenter>
            <VerticalSpacer size='large' />
        </UserCardWrapper>
    );
};
