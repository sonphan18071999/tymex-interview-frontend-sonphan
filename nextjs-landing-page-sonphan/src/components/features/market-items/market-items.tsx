import NFTCard from "@/components/commons/NFT-card/NFT-card";
import { IProduct } from "@/models/product.model";
import { useState } from "react";
import styles from "@/styles/market-items.module.scss";

interface MarketItemsProps {
  products: IProduct[];
}

const MarketItems: React.FC<MarketItemsProps> = ({ products }) => {
  const [displayItems, setDisplayItems] = useState<IProduct[]>(
    products.slice(0, 20),
  );
  return (
    <>
      <h2>Market Items</h2>
      <div className={styles.items__container}>
        {displayItems.map((product) => (
          <NFTCard type="Common" key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default MarketItems;
