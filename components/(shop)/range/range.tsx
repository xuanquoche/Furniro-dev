import { RANGE } from "@/constants";
import Image from "next/image";

interface RangeProps {
  description?: string;
}

const Range = ({
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}: RangeProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl md:text-3xl font-bold text-text-category">
        Browse The Range
      </h2>
      <p className="text-lg md:text-lg font-normal text-text-treating">
        {description}
      </p>
      <div className="flex gap-4">
        {RANGE.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-8 cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="hover:scale-110 duration-300"
            />
            <h3 className="font-semibold text-lg md:text-2xl text-text-category">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Range;
