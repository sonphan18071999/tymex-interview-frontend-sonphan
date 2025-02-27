import MarketItems from "@/components/features/market-items/market-items";
import styles from "@/styles/market-place.module.scss";
import FilterForm from "@/components/features/filter-form/filter-form";
import React from "react";
import FilterTag from "@/components/features/filter-tag/filter-tag";

const MarketPlace = () => {
  return (
    <>
      <div className={styles.market__container}>
        <FilterForm />
        <div className={styles.market__items}>
          <FilterTag />
          <MarketItems />
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
