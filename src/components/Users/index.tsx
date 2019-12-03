import React, { useEffect, FunctionComponent } from 'react';
import { useGetRequest } from 'src/hooks/useGetRequest';
import styled from 'styled-components/macro';

import { colors as themeColors } from 'src/theme';

import { Paragraph } from 'src/components/Typography';
import { UserCard, UserType } from 'src/components/UserCard';
import { Carousel } from 'src/components/Carousel';

const chooseColor = (index: number): string => {
    const availableColours = [
        themeColors.pink,
        themeColors.yellow,
        themeColors.darkGrey,
    ];
    return availableColours[index % availableColours.length];
};

const UsersWrapper = styled.div``;

export const Users: FunctionComponent = () => {
    const url =
        'https://randomuser.me/api/?nat=gb&results=5&inc=name,email,login,location,picture&noinfo';
    const [data, isLoading, isError, setUrl] = useGetRequest(url, {
        results: [],
    });

    useEffect(() => {
        setUrl(url);
    }, [setUrl]);

    return (
        <UsersWrapper>
            {isError ? (
                <Paragraph>Error retrieving user data</Paragraph>
            ) : isLoading ? (
                <Paragraph>Loading</Paragraph>
            ) : (
                <Carousel>
                    {data.results.map((user: UserType, index: number) => (
                        <UserCard
                            key={user.login.uuid}
                            user={user}
                            color={chooseColor(index)}
                        />
                    ))}
                </Carousel>
            )}
        </UsersWrapper>
    );
};

export default Users;
