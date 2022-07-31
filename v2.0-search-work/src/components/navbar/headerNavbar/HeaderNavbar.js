import { Link, useNavigate } from "react-router-dom";
import SignUp from "../../RegAuth/SignUp";
import SignIn from "../../RegAuth/SignIn";
import "./headerNavbar.css";
import SearchPage from "../../pages/SearchWorkPage/SearchPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { fetchVacancy, finder } from "../../feauters/searchVacanciSlice";

import * as React from "react";
import Button from "@mui/material/Button";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { logout } from "../../feauters/userSlice";


function HeaderNavbar() {
  const vacancy = useSelector((state) => state.search.vacancy);
  const searchText = useSelector((state) => state.search.searchText);
  const dispatch = useDispatch();


  const navigate = useNavigate()
  const token = useSelector((state) => state.user.token)


  const [text, setText] = useState(searchText ? searchText : "");
  

  const [vacancySearch, setVacancySearch] = useState({ vacancy });

  const handlChange = (e) => {
    setText(e.target.value);

    vacancy.filter((i) => i.salary < 1);

  };


  // console.log(vacancy)

  const arr = vacancy?.filter((element) =>
    element.name.toLowerCase().includes(text.toLowerCase())
  );
  console.log(arr);


  useEffect(() => {
    dispatch(fetchVacancy());
    dispatch(finder(text));
  }, [dispatch, text]);



  // const handleSearch = (text) => {
  //   navigate("/search/vacancy");
  // };
  // console.log(window.location.href);
  // const handleClick = () => {};


  const handleLogoutClick = () => {
    dispatch(logout());
    
  }


  const handleSearch = (text) => {
    setText(text);
    navigate("/search/vacancy");
  };

  const handleClick = () => {
    alert("ЛИШНИ ХУМШ МА ЯЗ ЕЙШ")
  }


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
