"use client";
import styles from "@/styles/market-place.module.scss";
import FilterForm from "@/components/features/filter-form/filter-form";
import React, { useMemo, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { IProduct } from "@/models/product.model";
import { Category, FilterFormFields } from "@/models/filter-form";
import FilterTag from "@/components/features/filter-tag/filter-tag";
import MarketItems from "@/components/features/market-items/market-items";

const MarketPlace = () => {
  const [limit, setLimit] = useState<number>(20);
  const [searchQueries, setSearchQueries] = useState<FilterFormFields>({});

  const queryString = useMemo(() => {
    const params = new URLSearchParams();

    Object.entries(searchQueries).forEach(([key, value]) => {
      if (
        value !== undefined &&
        value !== null &&
        value !== "" &&
        value !== "All"
      ) {
        params.append(key, String(value));
      }
    });

    params.append("_limit", `${limit}`);
    return params.toString();
  }, [searchQueries, limit]);

  const { data, loading } = useFetch<IProduct[]>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}products?${queryString}`,
  );

  const handleFieldSearch = (formValue: FilterFormFields) => {
    setSearchQueries((prev) => ({
      ...prev,
      ...formValue,
    }));
  };

  const handleTagSelection = (tag: Category) => {
    if (tag === "All") {
    }
    setSearchQueries((prev) => ({ ...prev, category: tag }));
  };

  const handleSearchChange = (text?: string) => {
    setSearchQueries((prev) => ({ ...prev, title: text?.trim() }));
  };

  return (
    <>
      <div className={styles.market__container}>
        <FilterForm
          onFormSearch={handleFieldSearch}
          onSearchChange={handleSearchChange}
        />
        <div className={styles.market__items}>
          <FilterTag onTagSelected={handleTagSelection} />
          <MarketItems
            products={data}
            onLoadMore={() => setLimit(limit + 20)}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
