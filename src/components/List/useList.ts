import { useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { ListProps } from "./List";

export const allPagesId = "all-pages";

export const useList = ({ items }: ListProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });

  const onSelectAll = () => {
    setSelectedItems((prev) => {
      if (prev.includes(allPagesId)) {
        return [];
      }
      return [...items.map((item) => item.id), allPagesId];
    });
  };

  const onSelectItem = (id: string) => {
    setSelectedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((currentId) => currentId !== id);
      }

      return [...prev, id];
    });
  };

  return {
    selectedItems,
    onSelectAll,
    onSelectItem,
    ref,
    events,
  };
};
