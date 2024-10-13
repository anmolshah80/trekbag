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

const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  if (items.length === 0) {
    return (
      <p className="empty-list">
        Your list is currently empty. Add your first item to get started!
      </p>
    );
  }

  return (
    <ul className="item-list">
      {items.map((item) => (
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
