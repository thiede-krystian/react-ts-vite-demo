import React, { FC } from 'react';
import { CollectionProps } from '../../types';
import * as constants from '../../constants';

import './Collection.css';

export const Collection: FC<CollectionProps> = ({ name, items, handleRemove }) => {
  const renderCollection = () => {
    if (items.length === 0) {
      return <p>{constants.noItemsInCollectionText}</p>;
    }

    return (
      <ul className="my-fav-pics-list">
        {items.map((collectionItem) => (
          <li key={collectionItem.title} className="collection-list-item">
            <img src={collectionItem.imgUrl} alt={collectionItem.title} />
            {collectionItem.title}
            <button onClick={() => handleRemove(collectionItem)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="my-fav-pics">
      <header>
        <h2>{name}</h2>
      </header>
      {renderCollection()}
    </div>
  );
};
