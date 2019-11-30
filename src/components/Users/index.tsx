import React, { useEffect, FunctionComponent } from 'react';
import { useGetRequest } from 'src/hooks/useGetRequest';
import styled from 'styled-components/macro';

import { Paragraph } from 'src/components/Typography';
import { UserCard, UserType } from 'src/components/UserCard';

const UsersWrapper = styled.div``;

export const Users: FunctionComponent = () => {
    const url =
        'https://randomuser.me/api/?nat=gb&results=10&inc=name,login,location,picture&noinfo';
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
                    <UserCard key={user.login.uuid} user={user} />
                ))
            )}
        </UsersWrapper>
    );
};

export default Users;
