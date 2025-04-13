'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Description = () => (
    <div>
        <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo
            speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes
            the show on the road.
        </p>
        <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
            engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is
            a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange
            and extended highs for a sound that is both articulate and pronounced. The analogue
            knobs allow you to fine tune the controls to your personal preferences while the
            guitar-influenced leather strap enables easy and stylish travel.
        </p>
    </div>
);

const AdditionalInfo = () => (
    <div>
        <p>Weight: 6.6 lbs</p>
        <p>Battery Life: 20 hours</p>
        <p>Bluetooth: Yes</p>
    </div>
);

const Reviews = () => (
    <div>
        <div>
            <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active
                stereo speaker takes the unmistakable look and sound of Marshall, unplugs the
                chords, and takes the show on the road.
            </p>
            <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
                engineering. Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both articulate and
                pronounced. The analogue knobs allow you to fine tune the controls to your personal
                preferences while the guitar-influenced leather strap enables easy and stylish
                travel.
            </p>
        </div>
    </div>
);

const ProductTabs = () => {
    return (
        <div className="my-8">
            <Tabs defaultValue="description" className="w-[80%] mx-auto">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger
                        className="data-[state=active]:font-bold data-[state=active]:text-xl text-gray-600 text-lg data-[state=active]:shadow-none"
                        value="description"
                    >
                        Description
                    </TabsTrigger>
                    <TabsTrigger
                        className="data-[state=active]:font-bold data-[state=active]:text-xl text-gray-600 text-lg data-[state=active]:shadow-none"
                        value="additional-info"
                    >
                        Additional Information
                    </TabsTrigger>
                    <TabsTrigger
                        className="data-[state=active]:font-bold data-[state=active]:text-xl text-gray-600 text-lg data-[state=active]:shadow-none"
                        value="reviews"
                    >
                        Reviews [5]
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-5">
                    <Description />
                </TabsContent>
                <TabsContent value="additional-info" className="mt-5">
                    <AdditionalInfo />
                </TabsContent>
                <TabsContent value="reviews" className="mt-5">
                    <Reviews />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ProductTabs;
