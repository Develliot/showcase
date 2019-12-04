import React, { useContext } from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';

import { UserContext } from 'src/contexts/UserContext';

import styled from 'styled-components/macro';

const MapWrapper = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${({
        theme: {
            colors: { white },
        },
    }) => white};
`;

const MarkerWrapper = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
    border: ${({
        theme: {
            colors: { darkGrey },
        },
    }) => `solid 1px ${darkGrey}`};
`;
const MarkerImage = styled.img`
    height: 100%;
    width: 100%;
`;

type MarkerProps = {
    lng: number;
    lat: number;
    imageSrc: string;
};
const Marker = (props: MarkerProps) => {
    return (
        <MarkerWrapper>
            <MarkerImage src={props.imageSrc} />
        </MarkerWrapper>
    );
};

export const Map = () => {
    const [state] = useContext(UserContext);

    const selectedUser = state.users[state.selectedPosition];

    if (!selectedUser) {
        return null;
    }
    const newCenter: Coords = {
        lat: selectedUser.location.coordinates.latitude,
        lng: selectedUser.location.coordinates.longitude,
    };

    return (
        <MapWrapper id='map'>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyCiVjDX7HFiFgzFxLrSz5LZAnBMzXl0CkU',
                }}
                center={newCenter}
                defaultZoom={8}
            >
                {state.users.map(user => (
                    <Marker
                        lat={user.location.coordinates.latitude}
                        lng={user.location.coordinates.longitude}
                        imageSrc={user.picture.large}
                    />
                ))}
            </GoogleMapReact>
        </MapWrapper>
    );
};

export default Map;
