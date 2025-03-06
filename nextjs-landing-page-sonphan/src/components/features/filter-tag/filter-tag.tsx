"use client";
import React, { useEffect, useState } from "react";
import { Button, Typography } from "antd";
import styles from "@/styles/features/filter-tag.module.scss";
import { Category, IFilterTag } from "@/models/filter-form";
import { useSearchStore } from "@/hooks/useSearchStore";

const FilterTag: React.FC = () => {
  const { searchByTag, tagSelected } = useSearchStore();
  const tagConfigs: IFilterTag[] = [
    { name: "All" },
    { name: "Upper Body" },
    { name: "Lower Body" },
    { name: "Hat" },
    { name: "Shoes" },
    { name: "Accessory" },
    { name: "Legendary" },
    { name: "Mythic" },
    { name: "Epic" },
    { name: "Rare" },
  ];

  const [currentActiveTag, setCurrentActiveTag] = useState<
    Category | undefined
  >(undefined);

  useEffect(() => {
    searchByTag();
  }, [tagSelected]);

  return (
    <div className={styles.filter__tag}>
      {tagConfigs.map((item) => (
        <Button
          className={`secondary-btn ${currentActiveTag === item.name ? "secondary-active-btn" : ""}`}
          key={item.name}
          onClick={() => {
            searchByTag(item.name);
            setCurrentActiveTag(item.name);
          }}
        >
          <Typography className={"text-white"}>{item.name}</Typography>
        </Button>
      ))}

      <Button className={"secondary-btn"}>
        <Typography className={"text-white"}>^</Typography>
      </Button>
    </div>
  );
};

export default FilterTag;
