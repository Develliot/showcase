import styled from 'styled-components/macro';

export const CarouselWrapper = styled.div`
    width: 100%;
    overflow-y: hidden;
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
    width: 100%;
`;

export const CarouselCardInner = styled.div`
    transition: transform 0.2s linear;
    transform: ${({ isSelected }: { isSelected: boolean }) =>
        isSelected ? 'scale(1)' : 'scale(0.85)'};
`;
