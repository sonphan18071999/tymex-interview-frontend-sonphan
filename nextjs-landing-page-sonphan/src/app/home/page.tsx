"use client";
import React from "react";

import styles from "@/styles/pages/home-page.module.scss";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/features/banner/banner"), {
  ssr: false,
});
const MarketPlace = dynamic(
  () => import("@/components/features/market-place/market-place"),
  { ssr: false },
);

const HomePage = () => {
  return (
    <div className={styles.homepage__container}>
      <Banner />
      <MarketPlace />
    </div>
  );
};

export default HomePage;
