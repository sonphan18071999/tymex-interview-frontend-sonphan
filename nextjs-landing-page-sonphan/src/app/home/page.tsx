import React from "react";
import Banner from "@/components/features/banner/banner";
import MarketPlace from "@/components/features/market-place/market-place";
import styles from '@/styles/pages/home-page.module.scss'

const HomePage = () => {
  return (
    <>
      <div className={styles.homepage__container}>
        <Banner />
        <MarketPlace />
      </div>
    </>
  );
};

export default HomePage;
