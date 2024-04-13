const BodyText = ({ children, className = "" }) => {
  return <p className={`font-light ${className}`}>{children}</p>;
};

export default BodyText;
