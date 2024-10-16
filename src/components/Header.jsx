import { useItemsStore } from '@/stores/itemsStore';

import Logo from '@/components/Logo';
import Counter from '@/components/Counter';

const Header = () => {
  const items = useItemsStore((state) => state.items);

  const numberOfItemsPacked = items.filter((item) => item.packed).length;

  const totalNumberOfItems = items.length;

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
};

export default Header;
