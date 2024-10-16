import { useRef, useState } from 'react';

import { useItemsStore } from '@/stores/itemsStore';

import Button from '@/components/Button';

const AddItemForm = () => {
  const inputRef = useRef(null);

  const addItem = useItemsStore((state) => state.addItem);

  const [itemText, setItemText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!itemText) {
      setErrorMessage('Please enter an item to add');

      return;
    }

    addItem(itemText);

    setItemText('');

    inputRef.current.focus();
  };

  const handleChange = (event) => {
    setItemText(event.target.value);

    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Toothbrush..."
        value={itemText}
        onChange={handleChange}
        autoFocus={true}
        className={errorMessage ? 'invalid-input' : ''}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <Button text="Add to list" />
    </form>
  );
};

export default AddItemForm;
