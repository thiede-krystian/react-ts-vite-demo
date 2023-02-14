import React, { FC, useEffect, useState } from 'react';
import { AvailableItemsProps, ItemProps } from '../types';
import { Filters } from './Filters/Filters';

import './AvailableItems.css';

const availableTags = ['nature', 'sea', 'architecture'];

export const AvailableItems: FC<AvailableItemsProps> = ({ items, handleClick }) => {
  const [filteredItems, setFilteredItems] = useState<ItemProps[]>(items);
  const [selectedTags, setSelectedTags] = useState<string[]>(availableTags);

  const renderItems = (): React.ReactNode => {
    return filteredItems.map((item) => {
      return (
        <li className="available-list-item" key={item.title}>
          <img src={item.imgUrl} alt={item.title} />
          {item.title}
          <button onClick={() => handleClick(item)}>Add</button>
        </li>
      );
    });
  };

  const handleFilter = (newTag: string) => {
    setSelectedTags((tags) => {
      if (tags.includes(newTag)) {
        return tags.filter((tag) => tag !== newTag);
      }

      return [...tags, newTag];
    });
  };

  useEffect(() => {
    setFilteredItems(items.filter((item) => selectedTags.find((selectedTag) => item.tags?.includes(selectedTag))));
  }, [selectedTags]);

  return (
    <div className="available-items">
      <header>
        <h2>All pics</h2>
      </header>
      <Filters tags={availableTags} selectedTags={selectedTags} handleFilter={handleFilter} />
      <ul className="available-items-list">{renderItems()}</ul>
    </div>
  );
};
