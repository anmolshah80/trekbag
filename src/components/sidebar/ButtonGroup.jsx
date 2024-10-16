import { useItemsContext } from '@/lib/hooks';

import Button from '@/components/Button';

const ButtonGroup = () => {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useItemsContext();

  return (
    <section className="button-group">
      <Button
        buttonType="secondary"
        text="Mark all as complete"
        onClick={handleMarkAllAsComplete}
      />
      <Button
        buttonType="secondary"
        text="Mark all as incomplete"
        onClick={handleMarkAllAsIncomplete}
      />
      <Button
        buttonType="secondary"
        text="Reset to initial"
        onClick={handleResetToInitial}
      />
      <Button
        buttonType="secondary"
        text="Remove all items"
        onClick={handleRemoveAllItems}
      />
    </section>
  );
};

export default ButtonGroup;
