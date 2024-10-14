const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <small>&copy; {currentYear} Trekbag</small>
      <p>
        Version <strong>1.0</strong>
      </p>
    </footer>
  );
};

export default Footer;
