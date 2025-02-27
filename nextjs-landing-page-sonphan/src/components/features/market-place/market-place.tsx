"use client";
import MarketItems from "@/components/features/market-items/market-items";
import styles from "@/styles/market-place.module.scss";
import FilterForm from "@/components/features/filter-form/filter-form";
import React from "react";
import FilterTag from "@/components/features/filter-tag/filter-tag";
import useFetch from "@/hooks/useFetch";
import { IProduct } from "@/models/product.model";

const MarketPlace = () => {
  const { data, loading, error } = useFetch<IProduct[]>(
    process.env.NEXT_PUBLIC_API_BASE_URL + "products",
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className={styles.market__container}>
        <FilterForm />
        <div className={styles.market__items}>
          <FilterTag />
          <MarketItems products={data} />
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
