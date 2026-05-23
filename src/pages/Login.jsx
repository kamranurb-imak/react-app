import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await loginUser({ username, password });
      localStorage.setItem("token", response.token);
      window.dispatchEvent(new Event("auth-change"));
      navigate("/home", { replace: true });
    } catch (loginError) {
      setError("Invalid credentials. Use kamran / kamran.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Sign in</h1>
        <p>Enter your username and password to continue to the protected Users area.</p>

        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label className="login-label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="login-input"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="kamran"
              autoComplete="username"
              required
            />
          </div>

          <div className="login-field">
            <label className="login-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="login-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          {error && <div className="login-error">{error}</div>}

          <div className="login-actions">
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <p className="login-hint">Allowed credentials: <strong>kamran</strong> / <strong>kamran</strong></p>
      </section>
    </main>
  );
}

export default Login;
