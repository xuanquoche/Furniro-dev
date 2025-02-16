import { Button } from '@/components/custom/button';
import ExploreCarousel from './explore-carousel';

interface ExploreProps {
    title: string;
    description: string;
}

const Explore = ({ title, description }: ExploreProps) => {
    return (
        <div className="flex bg-explore-background items-center gap-5 justify-around md:justify-normal">
            <div className="flex flex-col w-[80%] sm:w-[25%] p-5 ml-5 sm:ml-10 md:mx-auto">
                <h2 className="font-bold text-3xl text-text-product-name mb-2">
                    {title}
                </h2>
                <p className="font-medium text-base text-explore mb-3">
                    {description}
                </p>
                <Button className="w-full sm:w-[80%] lg:w-[50%] rounded-none font-semibold break-all">
                    Explore More
                </Button>
            </div>
            <ExploreCarousel />
        </div>
    );
};

export default Explore;
