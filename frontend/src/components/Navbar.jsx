import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Task Manager</h2>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;