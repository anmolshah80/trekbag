import { MdDelete } from 'react-icons/md';

const Item = ({ item }) => {
  const { name, packed } = item;

  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={packed} />
        {name}
      </label>

      <button>
        <MdDelete size={20} />
      </button>
    </li>
  );
};

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;
