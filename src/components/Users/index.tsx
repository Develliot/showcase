import React, { useEffect, FunctionComponent } from 'react';
import { useGetRequest } from 'src/hooks/useGetRequest';
import styled from 'styled-components/macro';

import { Paragraph } from 'src/components/Typography';
import { UserCard, UserType } from 'src/components/UserCard';

import { colors as themeColors } from 'src/theme';
import { getRandomInt } from 'src/utils/NumberUtils';

const randomColorPicker = (): string => {
    return [themeColors.pink, themeColors.yellow, themeColors.darkGrey][
        getRandomInt(3)
    ];
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
                data.results.map((user: UserType) => (
                    <UserCard
                        key={user.login.uuid}
                        user={user}
                        color={randomColorPicker()}
                    />
                ))
            )}
        </UsersWrapper>
    );
};

export default Users;
