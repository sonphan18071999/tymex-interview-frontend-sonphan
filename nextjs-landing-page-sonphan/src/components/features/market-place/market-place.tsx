"use client";
import styles from "@/styles/market-place.module.scss";
import FilterForm from "@/components/features/filter-form/filter-form";
import React, { useState } from "react";
import FilterTag from "@/components/features/filter-tag/filter-tag";
import MarketItems from "@/components/features/market-items/market-items";
import { useSearchStore } from "@/hooks/useSearchStore";

const MarketPlace = () => {
  const [limit, setLimit] = useState<number>(20);
  const { loading, products } = useSearchStore();

  return (
    <>
      <div className={styles.market__container}>
        <FilterForm />
        <div className={styles.market__items}>
          <FilterTag />
          <MarketItems
            products={products}
            onLoadMore={() => setLimit(limit + 20)}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
