import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchPage.module.css";
import { useEffect } from "react";
import { fetchVacancy } from "../../feauters/searchVacanciSlice";
import { Link } from "react-router-dom";
import HeaderNavbar from "../../navbar/headerNavbar/HeaderNavbar";

const SearchPage = () => {

  const vacancy = useSelector((state) => state.search.vacancy);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVacancy());
  }, [dispatch]);

  const [text, setText] = useState("");

  const handlChange = (e) => {
    setText(e.target.value);
  };

  const arr = vacancy.filter((element) => {
    return element.name.toLowerCase().includes(text.toLowerCase());
  });

  const handleClick = () => {
    alert("БОЛХ БЕШ ЯЦ ПОКА СОБАР ДЕ");
  };

  return (
    <div className={styles.mainCard}>
      <div className={styles.divHeaderNavbar}>
        <HeaderNavbar />
      </div>
      <div className={styles.cardVacancy}>
        {arr.map((element) => {
          return (
            <div className={styles.cardListVacancy}>
              <h5>{element.name}</h5>
              <div>{element.salary}</div>
              <div>{element.company}</div>
              <div>{element.city}</div>
              <div>{element.text.slice(0, 70) + "..."}</div>
            </div>
          );
        })}
      </div>
    </div>

    // <div>
    //   <div className={styles.headerNavbarMain}>
    //     <div className={styles.leftBox_navbarMain}>
    //       <button>
    //         <img
    //           src="https://vibromotors.ru/img/mobile-menu-icon.png"
    //           alt="anzor"
    //           width={"20px"}
    //           onClick={handleClick}
    //         />
    //       </button>
    //       <h3>
    //         <Link to="/">Название</Link>
    //       </h3>
    //     </div>

    //     <div className={styles.mainBox_navbarMain}>
    //       <form>
    //       <input
    //         type="text"
    //         value={text}
    //         placeholder="Поиск"
    //         onChange={handlChange}
    //       />
    //     </form>
    //       <button onClick={handleClick}>Найти</button>
    //     </div>

    //     <div className={styles.rightBox_navbarMain}>
    //       <button onClick={handleClick}>8-800-555-35-35</button>
    //       <button onClick={handleClick}>？</button>
    //       <button onClick={handleClick}>Вход</button>
    //       <button onClick={handleClick}>Регистрация</button>
    //     </div>
    //     {/* </div>
    //   <div className="form"> */}
    //   </div>
    //   <div>
    //     {arr.map((element) => {
    //       return (
    //         <div className={styles.cardListVacancy}>
    //           <div className={styles.vacancyName}>{element.name}</div>
    //           <div className={styles.vacancySalary}>{element.salary}</div>
    //           <div className={styles.vacancyCompany}>{element.name}</div>
    //           <div className={styles.vacancyCity}>{element.city}</div>
    //           <div className={styles.vacancyText}>
    //             {element.text.slice(0, 10 + "...")}
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default SearchPage;

