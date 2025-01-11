import slider_1 from '@/public/images/slider-image-3.png';
import slider_2 from '@/public/images/slider-image-4.png';
import slider_3 from '@/public/images/slider-image-5.png';
import slider_4 from '@/public/images/slider-image-6.png';
import slider_5 from '@/public/images/slider-image-7.png';
import slider_6 from '@/public/images/slider-image-8.png';
import slider_7 from '@/public/images/slider-image-9.png';
import slider_8 from '@/public/images/slider-image-10.png';
import slider_9 from '@/public/images/slider-image-11.png';
import { StaticImageData } from 'next/image';

export interface SliderType {
    image: StaticImageData;
}

export const BEDROOM_SLIDER: SliderType[] = [
    {
        image: slider_1
    },
    {
        image: slider_2
    },
    {
        image: slider_3
    }
];

export const LIVINGROOM_SLIDER: SliderType[] = [
    {
        image: slider_4
    },
    {
        image: slider_5
    },
    {
        image: slider_6
    }
];

export const DINING_SLIDER: SliderType[] = [
    {
        image: slider_7
    },
    {
        image: slider_8
    },
    {
        image: slider_9
    }
];
