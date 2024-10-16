import AddItemForm from '@/components/sidebar/AddItemForm';
import ButtonGroup from '@/components/sidebar/ButtonGroup';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <AddItemForm />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
