import Button from '@/components/Button';
import { useItemsStore } from '@/stores/itemsStore';

const ButtonGroup = () => {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete,
  );

  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button
        buttonType="secondary"
        text="Mark all as complete"
        onClick={markAllAsComplete}
      />
      <Button
        buttonType="secondary"
        text="Mark all as incomplete"
        onClick={markAllAsIncomplete}
      />
      <Button
        buttonType="secondary"
        text="Reset to initial"
        onClick={resetToInitial}
      />
      <Button
        buttonType="secondary"
        text="Remove all items"
        onClick={removeAllItems}
      />
    </section>
  );
};

export default ButtonGroup;
