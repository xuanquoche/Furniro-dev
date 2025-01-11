import { Button } from '@/components/custom/button';
import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';

interface ImageType {
    image: StaticImageData;
}

interface DotProps {
    active: boolean;
    onClick: () => void;
    image: ImageType[];
}

const CarouselDotCustom = ({ active, onClick, image }: DotProps) => {
    return (
        <div>
            <Button
                variant="ghost"
                onClick={(e) => {
                    onClick();
                    e.preventDefault();
                }}
                className={cn(
                    'relative p-[2px] w-3 h-3 mx-1 rounded-full text-sm font-bold uppercase transition-all duration-200',
                    {
                        'bg-gray-400 text-gray-300': !active,
                        'bg-button-background': active,
                        'hover:text-gray-300 hover:scale-105 hover:shadow-lg': !active,
                        'active:scale-95 active:shadow-md': true
                    }
                )}
            >
                {image && <div className="w-2 h-2 rounded-full overflow-hidden"></div>}
            </Button>
        </div>
    );
};

export default CarouselDotCustom;
