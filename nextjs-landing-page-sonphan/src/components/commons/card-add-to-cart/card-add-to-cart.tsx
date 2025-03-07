import React from "react";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface CardAddToCart {
  id: number;
  className: string;
}

const CardAddToCart: React.FC<CardAddToCart> = ({ className }) => {
  return (
    <>
      <div className={className}>
        <Button className="primary-btn text-white">Buy Now</Button>
        <Button className="secondary-btn text-white">
          <ShoppingCartOutlined />
        </Button>
      </div>
    </>
  );
};

export default CardAddToCart;
