import { Select, Typography } from "antd";
import styles from "@/styles/market-place.module.scss";

const { Text } = Typography;

interface CustomSelectProps {
  label: string;
  options: { value: string; label: string }[];
  handleSelect: (value: string) => void;
  defaultValue?: string;
}

const SystemSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  handleSelect,
  defaultValue,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Text strong className={"text-[#89888B] font-semibold uppercase"}>
        {label}
      </Text>
      <Select
        defaultValue={defaultValue}
        options={options}
        onChange={handleSelect}
        className={`w-full text-white bg-transparent ${styles.select__input}`}
        popupClassName={`${styles.select__pop_up}`}
      />
    </div>
  );
};
export default SystemSelect;
