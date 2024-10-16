import { createContext, useEffect, useState } from 'react';

import { INITIAL_ITEMS } from '@/lib/constants';

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem('trekbag-items') || INITIAL_ITEMS);
  });

  const numberOfItemsPacked = items.filter((item) => item.packed).length;

  const totalNumberOfItems = items.length;

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
  };

  const handleDeleteItem = (itemID) => {
    setItems((previousItems) =>
      previousItems.filter((item) => item.id !== itemID),
    );
  };

  const handleToggleItem = (itemID) => {
    setItems((previousItems) =>
      previousItems.map((item) => {
        if (item.id === itemID) {
          return {
            ...item,
            packed: !item.packed,
          };
        }

        return item;
      }),
    );
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(INITIAL_ITEMS);
  };

  const handleMarkAllAsIncomplete = () => {
    setItems((previousItems) =>
      previousItems.map((item) => ({
        ...item,
        packed: false,
      })),
    );
  };

  const handleMarkAllAsComplete = () => {
    setItems((previousItems) =>
      previousItems.map((item) => ({
        ...item,
        packed: true,
      })),
    );
  };

  useEffect(() => {
    localStorage.setItem('trekbag-items', JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        totalNumberOfItems,
        numberOfItemsPacked,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
