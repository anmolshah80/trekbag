const Button = ({ text, type }) => {
  const secondaryButtonClassName = type === 'secondary' ? 'btn--secondary' : '';

  return <button className={`btn ${secondaryButtonClassName}`}>{text}</button>;
};

export default Button;
