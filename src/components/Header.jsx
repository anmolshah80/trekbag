import Logo from '@/components/Logo';
import Counter from '@/components/Counter';

const Header = ({ numberOfItemsPacked, totalNumberOfItems }) => {
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
};

export default Header;
