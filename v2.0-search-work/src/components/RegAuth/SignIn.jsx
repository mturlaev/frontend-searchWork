import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../feauters/userSlice";
import { Link, useNavigate } from "react-router-dom";
import style from "./signInUp.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.user.error);
  const signingIn = useSelector((state) => state.user.signingIn);

  useEffect(() => {
    if (signingIn) {
      navigate("/");
    }
  }, [signingIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email[0] !== " " &&
      password[0] !== " " &&
      email !== "" &&
      password !== ""
    ) {
      dispatch(login({ email, password }));
      setEmail("");
      setPassword("");
    }
  };
  const handleChangeLogin = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.signInUp}>
        <form className={style.authForm} onSubmit={(e) => handleSubmit(e)}>
          <h3 className={style.auth}>Авторизация</h3>
          <input
            className={style.email}
            type="email"
            value={email}
            placeholder="Введите логин"
            onChange={(e) => handleChangeLogin(e)}
          />
          <input
            className={style.password}
            type="password"
            value={password}
            placeholder="Введите пароль"
            onChange={(e) => handleChangePassword(e)}
          />
          <button
            className={style.signInUpBtn}
            onClick={(e) => handleSubmit(e)}
          >
            Войти
          </button>
          {!error ? null : <div className={style.error}>{error}</div>}
          <div className={style.linkDiv}>
            У вас нет аккаунта?<Link to="/signUp">Зарегистрируйтесь</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
