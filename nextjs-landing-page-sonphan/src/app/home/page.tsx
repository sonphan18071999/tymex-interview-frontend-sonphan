import React from "react";
import Banner from "@/components/features/banner/banner";
import MarketPlace from "@/components/features/market-place/market-place";

const HomePage = () => {
  return (
    <>
      <div className={"flex flex-col"}>
        <Banner />
        <MarketPlace />
      </div>
    </>
  );
};

export default HomePage;
