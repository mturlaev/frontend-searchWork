import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../feauters/userSlice';
import { Link, useNavigate } from "react-router-dom";
import "./signInUp.module.css";


const SignIn = () => {

const [email, setEmail] = useState("")
const [password, setPassword]= useState("");
const token = localStorage.getItem("token");
const dispatch = useDispatch();
const navigate = useNavigate();
const isActivated = useSelector(state => state.user.isActivated)

const handleSubmit = (e) => {
  e.preventDefault();
    if (
      email[0] !== " " &&
      password[0] !== " " &&
      email !== "" &&
      password !== ""
    ) {
      dispatch(login({email, password}));
      setEmail("");
      setPassword("");
      navigate('/')
    }
}

const handleChangeLogin = (e) => {
  setEmail(e.target.value)
}
const handleChangePassword = (e) => {
  setPassword(e.target.value)
}

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
        type="email" 
        value={email} 
        placeholder='Введите логин' 
        onChange={(e) => handleChangeLogin(e)}
        />
        <input 
        type="password" 
        value={password} 
        placeholder="Введите пароль" 
        onChange={(e) => handleChangePassword(e)} 
        />
        <button onClick={(e) => handleSubmit(e)}>Войти</button>
      </form>
      <div>У вас нет аккаунта?<Link to='/signUp'>Зарегистрируйтесь</Link></div>
    </div>
  );
};

export default SignIn;