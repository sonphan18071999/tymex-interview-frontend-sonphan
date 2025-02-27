import { NFTBackgroundConfig } from "@/models/configs/NFTBackgroundConfig.model";
import styles from "@/styles/market-place.module.scss";
import React from "react";
import { Button, Image, Tag, Typography } from "antd";
import { HeartFilled } from "@ant-design/icons";
import Author from "@/components/commons/author/author";

interface NFTCardProps {
  type: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ type }) => {
  const NFTcards: NFTBackgroundConfig[] = [
    { type: "Epic", src: "/assets/images/epic-card-bg.svg" },
    { type: "Mythic", src: "/assets/images/mythic-card-bg.svg" },
    { type: "Common", src: "/assets/images/common-card-bg.svg" },
    { type: "Legendary", src: "/assets/images/legendary-card-bg.svg" },
  ];

  const background = NFTcards.find((item) => item.type === type)?.src || "";

  const mapBackgroundType = () => {
    const itemFound = NFTcards.find((item) => item.type === type);
    if (!itemFound) {
      console.error("No match NFT item found");
      return { backgroundImage: "none" };
    }
    return { backgroundImage: `url(${itemFound.src})` };
  };
  return (
    <div className={`nft-card w-2 h-2 ${styles.NFT__card}`}>
      <div className={styles.NFT__picture} style={mapBackgroundType()}>
        <div className={styles.picture__header}>
          <Tag className={styles.header__primary_button}>{type}</Tag>
          <Button className={styles.header__heart_button}>
            <HeartFilled />
          </Button>
        </div>
      </div>
      <div className={styles.NFT__details}>
        <div className={styles.details__header}>
          <Typography className={"text-white"}>
            <b>The DJ</b>
          </Typography>
          <div className={styles.details__price}>
            <Image
              src={"/assets/images/logos_ethereum.svg"}
              width={"20"}
              height={"20"}
            />
            <Typography className={"text-white"}>248 ETH</Typography>
          </div>
        </div>
        <div className={styles.author}>
          <Author
            image={"/assets/images/the-dj.svg"}
            name={"Geography "}
            type={"verified-level-1"}
          />
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
