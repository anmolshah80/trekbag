import { useState } from 'react';

import { INITIAL_ITEMS } from '@/lib/constants';

import BackgroundHeading from '@/components/BackgroundHeading';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ItemList from '@/components/ItemList';
import Sidebar from '@/components/sidebar/Sidebar';

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const completedItemsCount = items.filter((item) => item.packed).length;

  const totalItems = items.length;

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

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header
          items={items}
          completedItemsCount={completedItemsCount}
          totalItems={totalItems}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
