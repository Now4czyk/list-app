import { Item, List } from "./components/List/List";
import { v4 as uuid } from "uuid";
import styles from "./index.module.scss";

const createListItem = (name: string): Item => {
  return { id: uuid(), name };
};

const listItems: Item[] = [
  createListItem("Page 1"),
  createListItem("Page 2"),
  createListItem("Page 3"),
  createListItem("Page 4"),
  createListItem("Page 5"),
  createListItem("Page 6"),
];

function App() {
  return (
    <div className={styles.wrapper}>
      <List items={listItems} />
    </div>
  );
}

export default App;
