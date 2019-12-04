import React, { useEffect, useContext, FunctionComponent } from 'react';
import { useGetRequest } from 'src/hooks/useGetRequest';
import { UserContext } from 'src/contexts/UserContext';

import {
    scaleLatitudeGlobalToUK,
    scaleLongitudeGlobalToUK,
} from 'src/utils/NumberUtils';

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

// TODO Feels like this is middleware that should live in the hook
// This pattern of using containers + hooks + context is a bit weird
export const UsersContainer: FunctionComponent = () => {
    const url =
        'https://randomuser.me/api/?nat=gb&results=5&inc=name,email,login,location,picture&noinfo';
    const [data, isLoading, isError, setUrl] = useGetRequest(url, {
        results: [],
    });
    const [state, dispatch] = useContext(UserContext);

    // the coordiates are random and sometimes not visible on the map with extreme latitudes,
    // lets keep the randomness but restrict the scale to only the UK
    const transformCoords = (users: UserType[]): UserType[] => {
        return users.map(user => {
            return {
                ...user,
                location: {
                    ...user.location,
                    coordinates: {
                        latitude: scaleLatitudeGlobalToUK(
                            user.location.coordinates.latitude
                        ),
                        longitude: scaleLongitudeGlobalToUK(
                            user.location.coordinates.longitude
                        ),
                    },
                },
            };
        });
    };

    useEffect(() => {
        // only get mock user data if there is no exiting user data
        if (state.users.length === 0) {
            setUrl(url);
            const users = transformCoords(data.results);
            dispatch({ ...state, users });
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
