import React from "react";
import { Typography } from "antd";

interface AuthorProps {
  image: string;
  name: string;
  type: string;
}

const Author: React.FC<AuthorProps> = ({ image, name, type }) => {
  const typesSrc: Record<string, string>[] = [
    { online: "/assets/images/verified-green.svg" },
    { offline: "/assets/images/verified-pink.svg" },
  ];

  const mapTagType = () => {
    const found = typesSrc.find((obj) => type in obj);
    return found ? found[type] : "/assets/images/unavailable-icons.svg";
  };

  return (
    <div className=" flex items-center rounded-lg gap-1">
      <div className="relative  w-10 h-10 ">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover rounded-full bg-white"
        />

        <img
          src={mapTagType()}
          alt="Verified tag of profile"
          width={10}
          height={10}
          className="absolute -bottom-1 -right-1 w-4 h-4"
        />
      </div>

      <Typography className="text-sm text-white">{name}</Typography>
    </div>
  );
};

export default Author;
