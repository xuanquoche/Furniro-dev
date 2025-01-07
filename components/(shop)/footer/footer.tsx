import { Button } from "@/components/custom/button";
import { Input } from "@/components/ui/input";
import { FOOTER_NAV, HEADER_NAV } from "@/constants";
import Link from "next/link";

interface FooterProps {
  location: string;
}

const Footer = ({ location }: FooterProps) => {
  return (
    <footer className="hidden lg:grid grid-cols-8 px-14 py-12 fixed bottom-0 z-1000 w-full">
      <div className="col-span-3">
        <h2 className="text-2xl leading-9 font-bold mb-10">Funiro.</h2>
        <p className="w-[285px] text-text-gray text-base">{location}</p>
      </div>
      <div className="cursor-pointer">
        <h3 className="text-base text-text-gray mb-10">Links</h3>
        <div className="flex flex-col gap-6">
          {HEADER_NAV.map((item, index) => (
            <Link
              key={index}
              className="hover:border-b-2 hover:border-black w-fit font-medium text-base text-black h-7"
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="cursor-pointer">
        <h3 className="text-base text-text-gray mb-10">Help</h3>
        <div className="flex flex-col gap-6">
          {FOOTER_NAV.map((item, index) => (
            <Link
              key={index}
              className="hover:border-b-2 hover:border-black w-fit font-medium text-base text-black h-7"
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-3 flex flex-col items-start mx-8 w-full">
        <h3 className="text-base text-text-gray mb-10 text-left w-full">
          Newsletter
        </h3>
        <div className="flex gap-3">
          <Input
            type="text"
            placeholder="Enter your email"
            className="border-b-2 focus-visible:ring-0 focus:shadow-none border-x-0 border-t-0 border-black"
          />
          <Button
            variant="ghost"
            className="border-b-2 border-black h-full font-medium text-sm"
            size="sm"
          >
            SUBSCRIBE
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
