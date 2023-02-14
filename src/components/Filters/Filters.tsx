import { FC } from 'react';
import { FiltersProps } from '../../types';

import './Filters.css';

export const Filters: FC<FiltersProps> = ({ tags, selectedTags, handleFilter }) => {
  const renderButtons = () => {
    return tags.map((tag) => (
      <button
        key={tag}
        className={`filter-btn${selectedTags.includes(tag) ? ' filter-btn-selected' : ''}`}
        onClick={() => handleFilter(tag)}
      >
        {tag}
      </button>
    ));
  };

  return <div className="filters-bar">Filters: {renderButtons()}</div>;
};
