import { Slider, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const SystemSlider = () => {
  return (
    <>
      <div>
        <Text strong className={"text-[#89888B] font-semibold uppercase"}>
          Price
        </Text>
        <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />;
      </div>
    </>
  );
};
export default SystemSlider;
