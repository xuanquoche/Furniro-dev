import slider_3 from '@/public/images/slider-image-3.png';
import slider_4 from '@/public/images/slider-image-4.png';
import slider_5 from '@/public/images/slider-image-5.png';
import slider_6 from '@/public/images/slider-image-6.png';
import slider_7 from '@/public/images/slider-image-7.png';
import slider_8 from '@/public/images/slider-image-8.png';
import slider_9 from '@/public/images/slider-image-9.png';
import slider_10 from '@/public/images/slider-image-10.png';
import slider_11 from '@/public/images/slider-image-11.png';
import Image from 'next/image';

const Furnitor = () => {
    return (
        <div className="grid grid-cols-5 overflow-hidden mx-5 xl:mx-0">
            <div className="col-span-2 grid grid-rows-2 w-full gap-y-2">
                <div className="flex gap-2 justify-end mr-2">
                    <Image src={slider_11} alt="hihi" className="" />
                    <Image
                        src={slider_10}
                        alt="hihi"
                        className="h-3/4 self-end"
                    />
                </div>
                <div className="flex gap-2 justify-end mr-2">
                    <Image src={slider_3} alt="hihi" className="" />
                    <Image
                        src={slider_8}
                        alt="hihi"
                        className="h-3/4 self-start"
                    />
                </div>
            </div>
            <div className="w-full flex items-center">
                <Image src={slider_9} alt="hihi" className="" />
            </div>
            <div className="col-span-2 grid grid-rows-2 w-full gap-y-2">
                <div className="flex gap-2 justify-start ml-2">
                    <Image
                        src={slider_5}
                        alt="hihi"
                        className="h-3/4 self-end"
                    />
                    <Image src={slider_4} alt="hihi" className="" />
                </div>
                <div className="flex gap-2 justify-start ml-2">
                    <Image src={slider_7} alt="hihi" className="" />
                    <Image
                        src={slider_6}
                        alt="hihi"
                        className="h-3/4 self-start"
                    />
                </div>
            </div>
        </div>
    );
};

export default Furnitor;
