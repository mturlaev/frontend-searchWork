import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVacancy } from "../../feauters/searchVacanciSlice";
import SearchPage from "../SearchWorkPage/SearchPage";
import styles from "./viewVacancy.module.css";

const ViewVacancyPage = () => {
  const vacancу = useSelector((state) => state.search.vacancy);
  const { id } = useParams();

  const dispatch = useDispatch();

  // console.log(vacancу, id);

  useEffect(() => {
    dispatch(fetchVacancy());
  }, [dispatch]);

  // const [banan, setBanan] = useState("");

  return (
    <div className={styles.mainCard}>
      {vacancу.map((item) => {
        if (item._id === id) {
          return (
            <div key={id} className={styles.cardListVacancy}>
              <h4>{item.name}</h4>
              <h5>{item.salary}</h5>
              <div>{item.company}</div>
              <h5>{item.city}</h5>
              <div>{item.text}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ViewVacancyPage;
