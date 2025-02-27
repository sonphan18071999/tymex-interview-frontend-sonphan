"use client";
import { Button, Input } from "antd";
import SystemSelect from "@/components/commons/system-select/system-select";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import styles from "@/styles/market-place.module.scss";
import SystemSlider from "@/components/commons/system-slider/system-slider";

interface CustomSelectProps {
  label: string;
  options: { value: string; label: string }[];
  handleSelect: (value: string) => void;
  defaultValue?: string;
}

const FilterForm = () => {
  const handleChange = () => {};
  const handleTierChange = () => {};

  const selectConfigs: CustomSelectProps[] = [
    {
      label: "Tier",
      options: [
        { value: "all", label: "All" },
        { value: "gold", label: "Gold" },
        { value: "silver", label: "Silver" },
        { value: "bronze", label: "Bronze" },
      ],
      handleSelect: (value: string) => {},
      defaultValue: "gold",
    },
    {
      label: "Theme",
      options: [
        { value: "all", label: "All" },
        { value: "gold", label: "Gold" },
        { value: "silver", label: "Silver" },
        { value: "bronze", label: "Bronze" },
      ],
      handleSelect: (value: string) => {},
      defaultValue: "gold",
    },
    {
      label: "Time",
      options: [
        { value: "all", label: "All" },
        { value: "gold", label: "Gold" },
        { value: "silver", label: "Silver" },
        { value: "bronze", label: "Bronze" },
      ],
      handleSelect: (value: string) => {},
      defaultValue: "gold",
    },
    {
      label: "Price",
      options: [
        { value: "all", label: "All" },
        { value: "gold", label: "Gold" },
        { value: "silver", label: "Silver" },
        { value: "bronze", label: "Bronze" },
      ],
      handleSelect: (value: string) => {},
      defaultValue: "gold",
    },
  ];
  return (
    <>
      <div>
        <Input
          placeholder={"Quick search"}
          prefix={<SearchOutlined className={styles.search__icon} />}
          className={styles.search__input}
        />
        <SystemSlider />
        {selectConfigs.map((config) => (
          <SystemSelect
            label={config.label}
            options={config.options}
            handleSelect={config.handleSelect}
            key={config.label}
          />
        ))}
        <div className={styles.action__buttons}>
          <Button type="text">Reset</Button>
          <Button type="primary">Search</Button>
        </div>
      </div>
    </>
  );
};
export default FilterForm;
