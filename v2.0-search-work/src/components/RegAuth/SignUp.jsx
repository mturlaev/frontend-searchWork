import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from '../feauters/userSlice';
import { Link, useNavigate } from "react-router-dom";
import PreSignIn from './PreSignIn';

const SignUp = () => {
  const [email, setEmail] = useState("")
const [password, setPassword]= useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
    if (
      email[0] !== " " &&
      password[0] !== " " &&
      email !== "" &&
      password !== ""
    ) {
      dispatch(registration({email, password}));
      setEmail("");
      setPassword("");
      navigate('/preSignIn')
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
        <button onClick={(e) => handleSubmit(e)}> Зарегистрироваться</button>
      </form>
      <div>У вас есть аккаунт?<Link to='/signIn'>Войти</Link></div>
    </div>
  );
};

export default SignUp;