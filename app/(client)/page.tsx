import Banner from '@/components/(shop)/banner/banner';
import Explore from '@/components/(shop)/explore/explore';
import Product from '@/components/(shop)/product/product';
import Range from '@/components/(shop)/range/range';

const HomePage = async () => {
    return (
        <div>
            <div className="w-full h-[716px] hidden lg:block">
                <Banner />
            </div>
            <div className="p-5 md:p-12">
                <Range />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold text-xl md:text-3xl text-center text-text-category mb-5">Our Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[80%] gap-10 tiny:gap-5 sm:gap-4 md:gap-4 mb-10">
                    <Product
                        name="Syltherine"
                        description="Stylish cafe chair"
                        originalPrice={3500000}
                        discountPrice={2500000}
                        discountPercent={30}
                    />
                    <Product
                        name="Syltherine"
                        description="Stylish cafe chair"
                        originalPrice={3500000}
                        discountPrice={2500000}
                        discountPercent={30}
                        isNew
                    />
                    <Product
                        name="Syltherine"
                        description="Stylish cafe chair"
                        originalPrice={3500000}
                        discountPrice={2500000}
                        discountPercent={30}
                    />
                    <Product
                        name="Syltherine"
                        description="Stylish cafe chair"
                        originalPrice={3500000}
                        discountPrice={2500000}
                        discountPercent={30}
                    />
                    <Product
                        name="Syltherine"
                        description="Stylish cafe chair"
                        originalPrice={3500000}
                        discountPrice={2500000}
                        discountPercent={30}
                    />
                </div>
            </div>
            <div>
                <Explore
                    title="50+ Beautiful rooms inspiration"
                    description="Our designer already made a lot of beautiful prototipe of rooms that inspire you"
                />
            </div>
        </div>
    );
};

export default HomePage;
