import { useItemsContext } from '@/lib/hooks';

const Counter = () => {
  const { totalNumberOfItems, numberOfItemsPacked } = useItemsContext();

  if (totalNumberOfItems === 0) return null;

  return (
    <p>
      <strong>{numberOfItemsPacked}</strong> / {totalNumberOfItems} items packed
    </p>
  );
};

export default Counter;
