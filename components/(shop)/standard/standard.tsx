import { StandardItem } from './standard-item';
import CupIcon from '@/public/icons/cup-icon';
import FeatureIcon from '@/public/icons/feature-icon';
import HandIcon from '@/public/icons/hand-icon';
import HeadIcon from '@/public/icons/head-icon';

export const Standard = () => {
    return (
        <div className="bg-standard flex justify-around py-10 mt-10">
            <StandardItem
                icon={<CupIcon />}
                description="High Quality"
                title="crafted from top materials"
            />
            <StandardItem
                icon={<FeatureIcon />}
                description="Warranty Protection"
                title="Over 2 years"
            />
            <StandardItem
                icon={<HandIcon />}
                description="Free Shipping"
                title="Order over 150 $"
            />
            <StandardItem
                icon={<HeadIcon />}
                description="24 / 7 Support"
                title="Dedicated support"
            />
        </div>
    );
};
