import styled from 'styled-components/macro';

export const CarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow-y: hidden;
`;

export const CarouselFadeOutLeft = styled.div`
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: opacity 0.3s linear;
    opacity: ${({ visible }: { visible: boolean }) => (visible ? 1 : 0)};
    background: ${({
        theme: {
            colors: { blue },
        },
    }) =>
        `linear-gradient(to left, ${blue} , rgba(0,0,0,0) 5%, rgba(0,0,0,0) 90%,  rgba(0,0,0,0) 5%, rgba(0,0,0,0))`};
`;

export const CarouselFadeOutRight = styled(CarouselFadeOutLeft)`
    background: ${({
        theme: {
            colors: { blue },
        },
    }) =>
        `linear-gradient(to left, rgba(0,0,0,0) , rgba(0,0,0,0) 5%, rgba(0,0,0,0) 90%,  rgba(0,0,0,0) 5%, ${blue})`};
`;

export const CarouselScrollArea = styled.div`
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;

    white-space: nowrap;
    /* to hides */
    padding-bottom: 20px;
    margin-bottom: -20px;
    height: 100%;
`;

export const CarouselCard = styled.div`
    scroll-snap-align: center;
    display: inline-block;
    width: 80%;
`;

export const CarouselCardInner = styled.div`
    transition: transform 0.2s linear;
    transform: ${({ isSelected }: { isSelected: boolean }) =>
        isSelected ? 'scale(1)' : 'scale(0.85)'};
`;

export const DotContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
export const Dot = styled.button`
    border: none;
    padding: 0;
    margin: ${({
        theme: {
            spacing: { tiny },
        },
    }) => tiny};

    width: 16px;
    height: 16px;
    border-radius: 50%;
    color: ${({
        theme: {
            colors: { white },
        },
    }) => white};
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: ${({ selected }: { selected: boolean }) => (selected ? 1 : 0.6)};

    &:hover {
        transform: scale(1.5);
    }
`;
