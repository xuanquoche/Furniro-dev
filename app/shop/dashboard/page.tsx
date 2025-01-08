import Banner from "@/components/(shop)/banner/banner";

const HomePage = async () => {
  return (
    <div>
      <div className="w-full h-[716px] hidden lg:block">
        <Banner />
      </div>
    </div>
  );
};

export default HomePage;
