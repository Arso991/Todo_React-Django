import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import "../../styles/components/form.css";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  const name = method === "login" ? "Connexion" : "Inscription";
  return (
    <div>
      <form onSubmit={handleSubmit} className="aut-form-container">
        <h1>{name}</h1>
        <div className="form-input">
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Entrez votre nom d'utilisateur"
          />
        </div>
        <div className="form-input">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
          />
        </div>
        {/* {loading == true && <Loader />} */}
        <button className="form-button" type="submit">
          {name}
        </button>
      </form>
    </div>
  );
}
export default Form;
