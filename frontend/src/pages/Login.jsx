import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login button clicked");

    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      console.log("Login response:", response.data);

      localStorage.setItem("token", response.data.token);

      alert("Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.log("Login error:", error);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;