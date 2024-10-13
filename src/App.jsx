import { useState } from 'react';

import { INITIAL_ITEMS } from '@/lib/constants';

import BackgroundHeading from '@/components/BackgroundHeading';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ItemList from '@/components/ItemList';
import Sidebar from '@/components/sidebar/Sidebar';

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleAddItems = (newItem) => {
    const newItems = [...items, newItem];

    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar handleAddItems={handleAddItems} />
      </main>

      <Footer />
    </>
  );
}

export default App;
