import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVacancy } from "../../feauters/searchVacanciSlice";

import styles from "./VacanciesPage.module.css";

const VacanciesPage = () => {
    
  const searchVacancy = useSelector((state) => state.resume.resume);
  console.log(searchVacancy);

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handlChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = (text) => {
    setText(text);
  };

  const arr = searchVacancy.filter((element) =>
    element.searchVacancy.toLowerCase().includes(text.toLowerCase())
  );
//   console.log(arr);

  useEffect(() => {
    dispatch(fetchVacancy);
  }, [dispatch]);

  return (
    <div className={styles.headerNavbarMain}>
      <form action="">
        <input
          type="text"
          placeholder="Поиск"
          value={text}
          onChange={handlChange}
        />
        <button className={styles.searchBtn} onClick={() => handleSearch(text)}>
          Найти
        </button>
      </form>
      {arr.map((item, id) => {
        if (item._id === id) {
          return (
            <div key={id} className={styles.vacancies}>
              <div>{item.img}</div>
              <h4>{item.name}</h4>
              <h4>{item.surname}</h4>
              <div>{item.age}</div>
              <div>{item.phone}</div>
              <div>{item.email}</div>
              <div>{item.position}</div>
              <div>{item.experience}</div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default VacanciesPage;
