"use client";
import {Slider, Typography} from "antd";
import React from "react";
import styles from '@/styles/common/system-slider.module.scss'

interface SystemSliderProps {
    start: number;
    end: number;
}

const SystemSlider: React.FC<SystemSliderProps> = ({start, end}) => {
    const [startVal] = React.useState(start);
    const [endVal] = React.useState(end);

    const customTooltip = (value: number | undefined): string => {
        if (value === undefined) return "0";

        const convertETH = ((value / 100) * endVal).toFixed(0);
        return `${convertETH} ETH`;
    };

    return (
        <>
            <div className={styles.system__slider}>
                <Typography className={"text-[#89888B] font-semibold uppercase"}>
                    Price
                </Typography>
                <Slider range={{draggableTrack: true}} defaultValue={[20, 50]}
                        tooltip={{formatter: customTooltip}}
                />;
                <div className={styles.price__range}>
                    <Typography className={'text-white'}>{startVal} ETH</Typography>
                    <Typography className={'text-white'}>{endVal} ETH</Typography>
                </div>
            </div>
        </>
    );
};
export default SystemSlider;
