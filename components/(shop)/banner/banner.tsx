import Image from "next/image";
import BannerDefault from "@/public/images/banner-image.png";
import BannerInformation from "./banner-information";

interface BannerProps {
  imageUrl?: string;
}

const Banner = ({ imageUrl }: BannerProps) => {
  return (
    <div className="h-full relative">
      <div className="h-full">
        <Image
          src={imageUrl || BannerDefault}
          alt="banner"
          className="h-full w-full"
        />
      </div>
      <BannerInformation />
    </div>
  );
};

export default Banner;
