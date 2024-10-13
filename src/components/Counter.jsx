const Counter = ({ completedItemsCount, totalItems }) => {
  if (totalItems === 0) return null;

  return (
    <p>
      <strong>{completedItemsCount}</strong> / {totalItems} items packed
    </p>
  );
};

export default Counter;
