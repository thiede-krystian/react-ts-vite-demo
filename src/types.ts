export interface ItemProps {
  imgUrl: string;
  title: string;
  tags?: string[];
}

export interface CollectionProps {
  name: string;
  items: ItemProps[];
  handleRemove: (item: ItemProps) => void;
}

export interface AvailableItemsProps {
  items: ItemProps[];
  handleClick: (item: ItemProps) => void;
}

export interface FiltersProps {
  tags: string[];
  selectedTags: string[];
  handleFilter: (tag: string) => void;
}
