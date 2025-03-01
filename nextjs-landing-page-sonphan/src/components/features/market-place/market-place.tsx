"use client";
import MarketItems from "@/components/features/market-items/market-items";
import styles from "@/styles/market-place.module.scss";
import FilterForm from "@/components/features/filter-form/filter-form";
import React, {useEffect, useMemo, useState} from "react";
import FilterTag from "@/components/features/filter-tag/filter-tag";
import useFetch from "@/hooks/useFetch";
import {IProduct} from "@/models/product.model";
import {Category, FilterFormFields} from "@/models/filter-form";

const MarketPlace = () => {
    const [limit, setLimit] = useState<number>(20);
    const [searchQueries, setSearchQueries] = useState<FilterFormFields>({});

    const queryString = useMemo(() => {
        const params = new URLSearchParams();

        Object.entries(searchQueries).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== "" && value !== "All") {
                params.append(key, String(value));
            }
        });

        params.append("_limit", `${limit}`);
        return params.toString();
    }, [searchQueries, limit]);


    const {data, loading, error} = useFetch<IProduct[]>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}products?${queryString}`,
    );

    const handleFieldSearch = (formValue: FilterFormFields) => {
        setSearchQueries((prev) => ({
            ...prev,
            ...formValue,
        }));
    }

    const handleTagSelection = (tag: Category) => {
        if (tag === "All") {

        }
        setSearchQueries((prev) => ({...prev, category: tag}));
    };


    return (
        <>
            <div className={styles.market__container}>
                <FilterForm onFormSearch={handleFieldSearch}/>
                <div className={styles.market__items}>
                    <FilterTag onTagSelected={handleTagSelection}/>
                    <MarketItems products={data} onLoadMore={() => setLimit(limit + 20)} loading={loading}/>
                </div>
            </div>
        </>
    );
};

export default MarketPlace;
