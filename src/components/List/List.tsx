import { ListItem } from "../ListItem/ListItem";
import styles from "./styles.module.scss";
import { allPagesId, useList } from "./useList";

export interface Item {
  id: string;
  name: string;
}

export interface ListProps {
  items: Item[];
}

export const List = ({ items }: ListProps) => {
  const { selectedItems, onSelectAll, onSelectItem, ref, events } = useList({
    items,
  });

  return (
    <ul data-testid={"list"} className={styles.list}>
      <ListItem
        label="All Pages"
        isChecked={selectedItems.includes(allPagesId)}
        onSelect={onSelectAll}
        id={allPagesId}
      />
      <hr className={styles.hr} />
      <div className={styles.itemsContainer} {...events} ref={ref}>
        {items.map((item) => (
          <ListItem
            key={item.id}
            label={item.name}
            isChecked={selectedItems.includes(item.id)}
            onSelect={() => onSelectItem(item.id)}
            id={item.id}
          />
        ))}
      </div>
      <hr className={styles.hr} />
      <button className={styles.button}>Done</button>
    </ul>
  );
};
