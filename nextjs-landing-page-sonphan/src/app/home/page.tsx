import React from "react";

import styles from "@/styles/pages/home-page.module.scss";
import Banner from "@/components/features/banner/banner";
import MarketPlace from "@/components/features/market-place/market-place";

const HomePage = () => {
  return (
    <div className={styles.homepage__container}>
      <Banner />
      <MarketPlace />
    </div>
  );
};

export default HomePage;
