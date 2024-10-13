import Button from '@/components/Button';

import { SECONDARY_BUTTON_TEXTS } from '@/lib/constants';

const ButtonGroup = () => {
  return (
    <section className="button-group">
      {SECONDARY_BUTTON_TEXTS.map((text) => (
        <Button key={text} type="secondary" text={text} />
      ))}
    </section>
  );
};

export default ButtonGroup;
