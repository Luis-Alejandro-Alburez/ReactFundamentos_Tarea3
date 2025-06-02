import { useState } from "react";
import { useData } from "../context/DataContext";

const Auth = () => {
  const { user, login, logout } = useData();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (user) {
    return (
      <div className="auth-container">
        <p>Bienvenido, {user.username}!</p>
        <button onClick={logout}>Cerrar sesión</button>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Auth;
