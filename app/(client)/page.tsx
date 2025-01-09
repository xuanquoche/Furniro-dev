import Banner from "@/components/(shop)/banner/banner";
import Range from "@/components/(shop)/range/range";

const HomePage = async () => {
  return (
    <div>
      <div className="w-full h-[716px] hidden lg:block">
        <Banner />
      </div>
      <div className="p-5 md:p-12">
        <Range />
      </div>
    </div>
  );
};

export default HomePage;
