import { useEffect, useRef, useState } from "react";
import { getUser } from "../../utils/authUtils";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../header/Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userfail, setUserfail] = useState(false);
  const [passwordfail, setPasswordfail] = useState(false);

  const [showpass, setShowPass] = useState(false);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const user = getUser();

    if (user.username !== username) {
      setUserfail(true);
    } else if (user.password !== password) {
      setPasswordfail(true);
    } else {
      localStorage.setItem("isLoggedIn", true);
      navigate("/todos");
    }
  }

  return (
    <>
      <Navbar />
      <form className="form" onSubmit={handleLogin}>
        <h2 className="title">Selamat Datang Kembali</h2>
        <div className="form-container">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            className="auth-input"
          />
          {userfail ? <p className="alert">username tidak ditemukan</p> : null}
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="input-password">
            <input
              type={showpass ? "text" : "password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input-password"
            />

            {showpass ? (
              <FontAwesomeIcon
                onClick={() => setShowPass(!showpass)}
                icon={faEye}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setShowPass(!showpass)}
                icon={faEyeSlash}
              />
            )}
          </div>
          {passwordfail ? <p className="alert">password salah</p> : null}
          <button className="auth-btn" type="submit">
            Login
          </button>
        </div>
        <h4 className="not-login">
          Belum punya akun?{" "}
          <Link className="not" to="/register">
            Daftar
          </Link>
        </h4>
      </form>
    </>
  );
};

export default Login;
