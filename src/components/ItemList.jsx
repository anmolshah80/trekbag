import { useState } from 'react';
import Select from 'react-select';
import { MdDelete } from 'react-icons/md';

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

const SortOptions = ({ setSortBy }) => {
  const options = [
    {
      label: 'Sort by default',
      value: 'default',
    },
    {
      label: 'Sort by name',
      value: 'name',
    },
    {
      label: 'Sort by packed',
      value: 'packed',
    },
    {
      label: 'Sort by unpacked',
      value: 'unpacked',
    },
  ];

  return (
    <section className="sorting">
      <Select
        options={options}
        defaultValue={options[0]}
        onChange={(option) => setSortBy(option.value)}
      />
    </section>
  );
};

const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  const [sortBy, setSortBy] = useState('default');

  if (items.length === 0) {
    return (
      <p className="empty-list">
        Your list is currently empty. Add your first item to get started!
      </p>
    );
  }

  const sortedItems = [...items].sort((a, b) => {
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
  });

  return (
    <ul className="item-list">
      <SortOptions setSortBy={setSortBy} />
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;
