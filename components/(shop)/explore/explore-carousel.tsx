'use client';

import Image from 'next/image';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import BedroomMain from '@/public/images/slider-image-2.png';
import LivingRoomMain from '@/public/images/living-room.png';
import DiningRoomMain from '@/public/images/dining.png';

import ExploreDescription from './explore-description';
import CarouselDotCustom from './carousel-dot-custom';

import { BEDROOM_SLIDER, LIVINGROOM_SLIDER, DINING_SLIDER, RoomType } from '@/constants';

const ExploreCarousel = () => {
    const responsiveCarousel = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const roomData = {
        [RoomType.BED_ROOM]: {
            image: BedroomMain,
            slider: BEDROOM_SLIDER
        },
        [RoomType.LIVING_ROOM]: {
            image: LivingRoomMain,
            slider: LIVINGROOM_SLIDER
        },
        [RoomType.DINING_ROOM]: {
            image: DiningRoomMain,
            slider: DINING_SLIDER
        }
    };

    const [currentRoomType, setCurrentRoomType] = useState<RoomType>(RoomType.BED_ROOM);

    const handleNextRoomType = () => {
        const roomTypes = Object.keys(roomData) as RoomType[];
        const nextIndex = (roomTypes.indexOf(currentRoomType) + 1) % roomTypes.length;
        setCurrentRoomType(roomTypes[nextIndex]);
    };

    const { image: currentImage, slider: currentSlider } = roomData[currentRoomType];

    return (
        <div className="sm:flex py-10 flex-2 hidden overflow-hidden">
            <div className="md:w-[350px] lg:w-[400px] h-[350px] md:h-[450px] lg:h-[528px] relative">
                <Image src={currentImage} alt={currentRoomType} className="h-full w-full" />
                <ExploreDescription
                    description="Inner Peace"
                    numberOrder={1}
                    roomType={currentRoomType}
                    onClick={handleNextRoomType}
                />
            </div>

            <div className="hidden md:block relative pb-7 md:w-[250px] xl:w-[400px] h-[496px] md:mr-7 md:ml-4 xl:ml-7">
                <Carousel
                    arrows
                    containerClass="container h-[80%] z-10"
                    dotListClass="!justify-start"
                    draggable
                    infinite
                    renderDotsOutside
                    responsive={responsiveCarousel}
                    slidesToSlide={1}
                    partialVisible={false}
                    autoPlay
                    showDots
                    itemClass="!w-[300px]"
                    sliderClass="gap-6"
                    customDot={
                        <CarouselDotCustom
                            image={BEDROOM_SLIDER}
                            onClick={handleNextRoomType}
                            active
                        />
                    }
                >
                    {currentSlider.map((slider, index) => (
                        <div key={index} className="h-full w-full overflow-hidden">
                            <Image
                                alt={`slider-${index}`}
                                src={slider.image}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ExploreCarousel;
