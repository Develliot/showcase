import React, { useEffect, useContext, FunctionComponent } from 'react';
import { useGetRequest } from 'src/hooks/useGetRequest';
import { UserContext } from 'src/contexts/UserContext';

import { Users } from 'src/components/Users';

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

export const UsersContainer: FunctionComponent = () => {
    const url =
        'https://randomuser.me/api/?nat=gb&results=5&inc=name,email,login,location,picture&noinfo';
    const [data, isLoading, isError, setUrl] = useGetRequest(url, {
        results: [],
    });

    const [state, dispatch] = useContext(UserContext);

    // retrieve user data only on mount
    // only get user data if there is no user date
    useEffect(() => {
        if (state.users.length === 0) {
            setUrl(url);
            dispatch({ ...state, users: data.results });
        }
    }, [setUrl, data]);

    const retry = (): void => {
        setUrl(url);
    };

    return (
        <Users
            isError={isError}
            isLoading={isLoading}
            retry={retry}
            users={state.users}
        />
    );
};

export default UsersContainer;
