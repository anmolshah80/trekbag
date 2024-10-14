import AddItemForm from '@/components/sidebar/AddItemForm';
import ButtonGroup from '@/components/sidebar/ButtonGroup';

const Sidebar = ({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />

      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
      />
    </div>
  );
};

export default Sidebar;
