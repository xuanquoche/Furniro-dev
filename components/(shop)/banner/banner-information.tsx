import { Button } from "@/components/custom/button";

interface BannerInformationProps {
  titleBanner?: string;
  description?: string;
}

const BannerInformation = ({
  titleBanner = " Discover Our New Collection",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
}: BannerInformationProps) => {
  return (
    <div className="absolute right-6 top-2/3 transform -translate-x-1/4 -translate-y-1/2 bg-banner-background px-10 py-12 w-[630px] h-[400px]">
      <p className="text-base ">New Arrival</p>
      <h2 className="text-button-background  text-[52px] font-semibold ">
        {titleBanner}
      </h2>
      <p className="text-lg font-medium text-text-category">{description}</p>
      <Button size="lg" className="rounded-none px-[72px] py-[25px] mt-4">
        BUY NOW
      </Button>
    </div>
  );
};

export default BannerInformation;
