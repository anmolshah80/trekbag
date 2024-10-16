import { useState, useMemo } from 'react';

import Select from 'react-select';
import { MdDelete } from 'react-icons/md';

import { useItemsStore } from '@/stores/itemsStore';

import { SORT_OPTIONS } from '@/lib/constants';

const Item = ({ item, handleDeleteItem, handleToggleItem }) => {
  const { name, packed } = item;

  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={packed}
          onChange={() => handleToggleItem(item.id)}
        />
        <span className={packed ? 'text-strike' : ''}>{name}</span>
      </label>

      <button onClick={() => handleDeleteItem(item.id)}>
        <MdDelete size={20} />
      </button>
    </li>
  );
};

const RenderSortOptions = ({ setSortBy }) => (
  <section className="sorting">
    <Select
      options={SORT_OPTIONS}
      defaultValue={SORT_OPTIONS[0]}
      onChange={(option) => setSortBy(option.value)}
    />
  </section>
);

const ItemList = () => {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const [sortBy, setSortBy] = useState('default');

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === 'packed') {
          return b.packed - a.packed;
        }

        if (sortBy === 'unpacked') {
          return a.packed - b.packed;
        }

        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }

        return a.id - b.id;
      }),
    [items, sortBy],
  );

  if (items.length === 0) {
    return (
      <p className="empty-list">
        Your list is currently empty. Add your first item to get started!
      </p>
    );
  }

  return (
    <ul className="item-list">
      <RenderSortOptions setSortBy={setSortBy} />
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleDeleteItem={deleteItem}
          handleToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;
