import Logo from '@/components/Logo';
import Counter from '@/components/Counter';

const Header = ({ completedItemsCount, totalItems }) => {
  return (
    <header>
      <Logo />
      <Counter
        completedItemsCount={completedItemsCount}
        totalItems={totalItems}
      />
    </header>
  );
};

export default Header;
