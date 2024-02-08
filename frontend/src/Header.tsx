import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="px-3 py-2 text-white bg-primary">
      Header
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
}
