import { Checkbox } from "../Checkbox/Checkbox";
import styles from "./styles.module.scss";

interface ListItemProps {
  label: string;
  id: string;
  isChecked: boolean;
  onSelect: () => void;
}

export const ListItem = ({
  label,
  id,
  isChecked,
  onSelect,
}: ListItemProps) => {
  return (
    <li
      data-testid={`list-item-${id}`}
      className={styles.listItem}
      onClick={onSelect}
    >
      <span>{label}</span>
      <Checkbox isChecked={isChecked} />
    </li>
  );
};
