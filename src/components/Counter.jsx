const Counter = ({ totalNumberOfItems, numberOfItemsPacked }) => {
  if (totalNumberOfItems === 0) return null;

  return (
    <p>
      <strong>{numberOfItemsPacked}</strong> / {totalNumberOfItems} items packed
    </p>
  );
};

export default Counter;
