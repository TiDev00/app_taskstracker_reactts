import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright &copy; 2023</p>
      <Link to="/about">About</Link>
    </div>
  );
};
