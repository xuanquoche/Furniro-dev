import { Button } from '@/components/custom/button';
import { RoomType } from '@/constants';
import { ArrowIcon } from '@/public/icons';

interface ExploreDescriptionProps {
    numberOrder: number;
    roomType: RoomType;
    description: string;
    onClick: (data: string) => void;
}

const ExploreDescription = ({
    numberOrder,
    roomType,
    description,
    onClick
}: ExploreDescriptionProps) => {
    const formatNumberOrder = (number: number) => {
        let numberFormat = '';
        if (number < 10) {
            numberFormat = `0${number}`;
        }
        return numberFormat;
    };

    return (
        <div className="absolute bottom-4 left-4 flex">
            <div className="relative">
                <div className="flex flex-col bg-white/80 py-[30px] px-5">
                    <p className="font-medium text-xs text-explore">
                        {formatNumberOrder(numberOrder)}--{roomType}
                    </p>
                    <h3 className="font-semibold text-text-product-name text-xl">
                        {description}
                    </h3>
                </div>
                <Button
                    onClick={() => onClick(roomType)}
                    className="absolute right-0 translate-x-[100%] bottom-0 rounded-none"
                >
                    <ArrowIcon />
                </Button>
            </div>
        </div>
    );
};

export default ExploreDescription;
