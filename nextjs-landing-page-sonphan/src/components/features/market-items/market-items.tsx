import NFTCard from "@/components/commons/NFT-card/NFT-card";
import {IProduct} from "@/models/product.model";
import React from "react";
import styles from "@/styles/market-items.module.scss";
import {Spin, Typography} from "antd";

interface MarketItemsProps {
    products: IProduct[] | null;
    onLoadMore: () => void;
    loading: boolean;
}

const MarketItems: React.FC<MarketItemsProps> = ({products, onLoadMore, loading}) => {
    return (
        <>
            <div className={styles.items__container}>
                {products?.length && products.map((product) => (
                    <NFTCard product={product} key={product.id} {...product} />
                ))}
            </div>
            <div className={'w-full flex justify-center my-4'}>
                <div className="w-full flex justify-center my-4">
                    <button
                        className="primary-btn px-60 flex items-center justify-center gap-2"
                        onClick={onLoadMore}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Spin size="small"/>
                                <Typography className="text-white">Loading...</Typography>
                            </>
                        ) : (
                            <Typography className="text-white">View more</Typography>
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}

export default MarketItems;
