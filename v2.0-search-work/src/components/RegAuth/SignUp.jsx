import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../feauters/userSlice";
import { Link, useNavigate } from "react-router-dom";
import style from "./signInUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.user.error);
  const signingUp = useSelector((state) => state.user.signingUp);

  useEffect(() => {
    if (signingUp) {
      navigate("/preSignIn");
    }
  }, [signingUp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email[0] !== " " &&
      password[0] !== " " &&
      email !== "" &&
      password !== ""
    ) {
      dispatch(registration({ email, password }));
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
      <div className={style.imgDiv}></div>
      <div className={style.signInUp}>
        <form className={style.authForm} onSubmit={(e) => handleSubmit(e)}>
          <h3 className={style.auth}>Регистрация</h3>
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
            Зарегистрироваться
          </button>
          {!error ? null : <div className={style.error}>{error}</div>}
          <div div className={style.linkDiv}>
            У вас есть аккаунт?<Link to="/signIn">Войти</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
