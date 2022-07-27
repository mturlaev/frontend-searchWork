import { Link } from "react-router-dom";
import SignUp from "../../RegAuth/SignUp";
import SignIn from "../../RegAuth/SignIn"
import "./headerNavbar.css";
import * as React from "react";
import Button from "@mui/material/Button";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function HeaderNavbar() {
  const handleClick = () => {
    alert("БОЛХ БЕШ ЯЦ ПОКА СОБАР ДЕ");
    alert("ахмат сила");
  };
  return (
    <div className="headerNavbarMain">
      <div className="leftBox-navbarMain">
        <Button variant="contained">
          <MenuOutlinedIcon onClick={handleClick} />
        </Button>
        <h3>
          <Link to="/">Название</Link> 
        </h3>
      </div>

      <div className="mainBox-navbarMain">
        <input type="text" placeholder="Поиск" />
        <button onClick={handleClick}>Найти</button>
      </div>

      <div className="rightBox-navbarMain">
        <button onClick={handleClick}>8-800-555-35-35</button>

        <button onClick={handleClick}>
          
        </button>
        <Link to="/signIn" path={<SignIn/>}>Вход</Link>
        <Link to="/signUp" path={<SignUp />}>Регистрация</Link>

      </div>
    </div>
  );
}

export default HeaderNavbar;
