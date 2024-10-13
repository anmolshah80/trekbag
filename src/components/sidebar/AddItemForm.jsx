import { useRef, useState } from 'react';

import Button from '@/components/Button';

const AddItemForm = ({ handleAddItems }) => {
  const inputRef = useRef(null);

  const [itemText, setItemText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputField = inputRef.current;

    // p tag for error message is the next node in the same parent container i.e., form
    const paragraphElement = inputField.nextSibling;

    if (!itemText) {
      inputField.classList.add('invalid-input');
      paragraphElement.classList.add('error-message');
      paragraphElement.textContent = 'Please enter an item to add';

      return;
    }

    handleAddItems({
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    });

    setItemText('');

    inputRef.current.focus();
  };

  const handleChange = (event) => {
    setItemText(event.target.value);

    const inputField = event.target;
    const paragraphElement = event.target.nextSibling;

    inputField.classList.remove('invalid-input');
    paragraphElement.classList.remove('error-message');
    paragraphElement.textContent = '';
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
      />
      <p></p>
      <Button text="Add to list" />
    </form>
  );
};

export default AddItemForm;
