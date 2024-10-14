const Button = ({ text, buttonType, onClick }) => {
  const secondaryButtonClassName =
    buttonType === 'secondary' ? 'btn--secondary' : '';

  return (
    <button className={`btn ${secondaryButtonClassName}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
