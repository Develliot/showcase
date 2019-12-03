import React, { FunctionComponent, useContext } from 'react';

import { colors as themeColors } from 'src/theme';
import { UserContext } from 'src/contexts/UserContext';

import { Paragraph } from 'src/components/Typography';
import { UserCard } from 'src/components/UserCard';
import { UserCardLoading } from 'src/components/UserCard/UserCardLoading';
import { Carousel } from 'src/components/Carousel';

// types
import { UserType } from 'src/containers/UsersContainer';

const chooseColor = (index: number): string => {
    const availableColours = [
        themeColors.pink,
        themeColors.yellow,
        themeColors.darkGrey,
    ];
    return availableColours[index % availableColours.length];
};

type Props = {
    isError: boolean;
    isLoading: boolean;
    users: UserType[];
    retry: () => void;
};

export const Users: FunctionComponent<Props> = ({
    isError,
    isLoading,
    users,
    retry,
}) => {
    const [state, dispatch] = useContext(UserContext);

    const setCurrentPosition = (position: number): void => {
        if (position !== state.selectedPosition) {
            dispatch({ ...state, selectedPosition: position });
        }
    };

    return (
        <>
            {isError ? (
                <Paragraph>Error retrieving user data</Paragraph>
            ) : isLoading ? (
                <Carousel>
                    <UserCardLoading />
                    <UserCardLoading />
                    <UserCardLoading />
                </Carousel>
            ) : (
                <Carousel onPositionChanged={setCurrentPosition}>
                    {users.map((user: UserType, index: number) => (
                        <UserCard
                            key={user.login.uuid}
                            user={user}
                            color={chooseColor(index)}
                        />
                    ))}
                </Carousel>
            )}
        </>
    );
};

export default Users;
