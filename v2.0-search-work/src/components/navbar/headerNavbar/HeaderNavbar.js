import { Link, useNavigate } from "react-router-dom";
import SignUp from "../../RegAuth/SignUp";
import SignIn from "../../RegAuth/SignIn";
import "./headerNavbar.css";
import SearchPage from "../../pages/SearchWorkPage/SearchPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchVacancy } from "../../feauters/searchVacanciSlice";
import * as React from "react";
import Button from "@mui/material/Button";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { logout } from "../../feauters/userSlice";


function HeaderNavbar() {
  const vacancy = useSelector((state) => state.search.vacancy);
  const searchText = useSelector((state) => state.search.searchText);
  const dispatch = useDispatch();

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const [text, setText] = useState(searchText ? searchText : "");

  const handlChange = (e) => {
    setText(e.target.value);
  };

  const arr = [].filter((element) => {
    return element.name.toLowerCase().includes(text.toLowerCase());
  });

  useEffect(() => {
    dispatch(fetchVacancy());
  }, [dispatch]);

  const handleClick = () => {};

  const handleLogoutClick = () => {
    dispatch(logout());
  }

  const handleSearch = (text) => {
    setText(text);
    navigate("/search/vacancy");
  };

  return (
    <>
      <div className="headerNavbarMain">
        <div className="leftBox-navbarMain">
          
          <Button>
          <MenuOutlinedIcon />
          </Button>
          <h3>
            <Link to="/">Название</Link>
          </h3>
        </div>

        <div className="mainBox-navbarMain">
          <input
            type="text"
            placeholder="Поиск"
            value={text}
            onChange={handlChange}
          />
          <button onClick={() => handleSearch(text)}>Найти</button>
        </div>


        <div className="rightBox-navbarMain">
          <button onClick={handleClick}>8-800-555-35-35</button>
          <button onClick={handleClick}>？</button>
          {token ? <button onClick={handleLogoutClick}>Выход</button> : <div><Link to="/signIn" path={<SignIn />}>
            <button>
            Вход
            </button>
          </Link>
          <Link to="/signUp" path={<SignUp />}>
            <button>

            Регистрация
            </button>
          </Link></div> }
          
        </div>

      </div>
      {window.location.href === "http://localhost:3000/search/vacancy" && (
        <SearchPage arr={arr} />
      )}
    </>
  );
}

export default HeaderNavbar;
