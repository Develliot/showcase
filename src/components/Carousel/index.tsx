import React, { FunctionComponent, useState, useRef } from 'react';
import _ from 'underscore';

import {
    CarouselWrapper,
    CarouselCardInner,
    CarouselCard,
    CarouselScrollArea,
} from './styles';

type Props = {};

export const Carousel: FunctionComponent<Props> = ({ children }) => {
    const [currentPosition, setCurrentPositon] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // remove null children
    const childArray = React.Children.toArray(children).filter(Boolean);

    const getScroll = () => {
        return {
            y: scrollRef.current ? scrollRef.current.scrollTop : undefined,
            x: scrollRef.current ? scrollRef.current.scrollLeft : undefined,
        };
    };

    const handleScroll = () => {
        if (!scrollRef || !scrollRef.current) {
            return null;
        }
        const rect = scrollRef.current.getBoundingClientRect();
        const width = rect.width;
        const scrollPosition = getScroll().x;
        if (scrollPosition) {
            const currentPosition = Math.round(scrollPosition / width);
            console.log(currentPosition);
            setCurrentPositon(currentPosition);
        }
    };

    const handleScrollThrottled = _.throttle(handleScroll, 100);

    return (
        <CarouselWrapper>
            <CarouselScrollArea
                ref={scrollRef}
                onScroll={handleScrollThrottled}
            >
                {childArray.map((child, index) => {
                    const isSelected = index === currentPosition;
                    return (
                        <CarouselCard key={index}>
                            <CarouselCardInner isSelected={isSelected}>
                                {child}
                            </CarouselCardInner>
                        </CarouselCard>
                    );
                })}
            </CarouselScrollArea>
        </CarouselWrapper>
    );
};

export default Carousel;
