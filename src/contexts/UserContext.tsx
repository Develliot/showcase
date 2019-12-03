import React, {
    FunctionComponent,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';
import { UserType } from 'src/containers/UsersContainer';

export type UserContextStateType = {
    users: UserType[];
    selectedPosition: number;
};

const defaultState: UserContextStateType = {
    users: [],
    selectedPosition: 0,
};

export type UserContextProviderType = [
    UserContextStateType,
    Dispatch<SetStateAction<UserContextStateType>>
];

export const UserContext = React.createContext<UserContextProviderType>([
    { ...defaultState },
    () => {},
]);

// making a provider HOC here so I can keep all the state code in this
// and not where ever this provider is used
export const UserProvider: FunctionComponent = ({ children }) => {
    const [state, setState] = useState({ ...defaultState });
    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    );
};
