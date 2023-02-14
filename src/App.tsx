import React, { useState } from 'react';
import { AvailableItems } from './components/AvailableItems';
import { items as itemsMock } from './mocks/items';
import { ItemProps } from './types';
import { Collection } from './components/Collection/Collection';

import './App.css';

function App() {
  const [collectionItems, setCollectionItems] = useState<ItemProps[]>([]);
  const addItem = (newItem: ItemProps) => {
    setCollectionItems((items) => {
      if (items.find((item) => item.imgUrl === newItem.imgUrl)) {
        return items;
      }

      return [...items, newItem];
    });
  };

  const removeItem = (removedItem: ItemProps) => {
    setCollectionItems((items) => items.filter((item) => item.imgUrl !== removedItem.imgUrl));
  };

  return (
    <div className="app-wrapper">
      <AvailableItems items={itemsMock} handleClick={addItem} />
      <Collection name="My fav pics" items={collectionItems} handleRemove={removeItem} />
    </div>
  );
}

export default App;
