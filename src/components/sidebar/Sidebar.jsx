import AddItemForm from '@/components/sidebar/AddItemForm';
import ButtonGroup from '@/components/sidebar/ButtonGroup';

const Sidebar = ({ handleAddItems }) => {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItems={handleAddItems} />

      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
