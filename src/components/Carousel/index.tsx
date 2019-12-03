import React, { FunctionComponent, useState, useRef } from 'react';
import _ from 'underscore';

import {
    CarouselWrapper,
    CarouselCardInner,
    CarouselCard,
    CarouselScrollArea,
    CarouselFadeOutLeft,
    CarouselFadeOutRight,
} from './styles';
import { VerticalSpacer } from 'src/components/Layout';
import { Dots } from './Dots';

type Props = {
    onPositionChanged?: (postion: number) => void;
};

export const Carousel: FunctionComponent<Props> = ({
    children,
    onPositionChanged,
}) => {
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

    const setPosition = (to: number) => {
        setCurrentPositon(to);

        if (onPositionChanged) {
            onPositionChanged(to);
        }
    };

    const scrollToPosition = (to: number) => {
        if (!scrollRef || !scrollRef.current) {
            return null;
        }
        const rect = scrollRef.current.getBoundingClientRect();
        const width = rect.width;
        const scrollPosition = Math.round(width * 0.8 * to);
        scrollRef.current.scrollTo(scrollPosition, 0);
        setPosition(to);
    };

    const handleScroll = () => {
        if (!scrollRef || !scrollRef.current) {
            return null;
        }
        const rect = scrollRef.current.getBoundingClientRect();
        const width = rect.width;
        const scrollPosition = getScroll().x;
        if (scrollPosition) {
            const currentPosition = Math.round(scrollPosition / (width * 0.8));
            setPosition(currentPosition);
        }
    };

    const handleScrollThrottled = _.throttle(handleScroll, 100);

    const fadeRightVisible = currentPosition !== childArray.length - 1;
    const fadeLeftVisible = currentPosition !== 0;

    return (
        <>
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
                <CarouselFadeOutLeft visible={fadeLeftVisible} />
                <CarouselFadeOutRight visible={fadeRightVisible} />
            </CarouselWrapper>
            <VerticalSpacer size='small' />
            <Dots
                count={childArray.length}
                currentPosition={currentPosition}
                scrollToPosition={scrollToPosition}
            />
        </>
    );
};

export default Carousel;