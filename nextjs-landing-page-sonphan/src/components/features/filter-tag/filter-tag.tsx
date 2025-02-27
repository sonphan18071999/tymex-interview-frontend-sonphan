"use client";
import React, { useState } from "react";
import { Button, Typography } from "antd";

const FilterTag = () => {
  const tagConfigs: FilterTag[] = [
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

  const [currentActiveTag, setCurrentActiveTag] = useState<TagType | undefined>(
    undefined,
  );

  return (
    <div>
      {tagConfigs.map((item, ind) => (
        <Button
          className={`secondary-btn ${currentActiveTag === item.name ? "secondary-active-btn" : ""}`}
          key={item.name}
          onClick={(event) => setCurrentActiveTag(item.name)}
        >
          <Typography className={"text-white"}>{item.name}</Typography>
        </Button>
      ))}
    </div>
  );
};

export default FilterTag;

interface FilterTag {
  name: TagType;
}

type TagType =
  | "All"
  | "Upper Body"
  | "Lower Body"
  | "Hat"
  | "Shoes"
  | "Accessory"
  | "Legendary"
  | "Mythic"
  | "Epic"
  | "Rare";
