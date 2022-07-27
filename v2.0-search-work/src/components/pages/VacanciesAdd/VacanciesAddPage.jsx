import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVacancy } from "../../feauters/searchVacanciSlice";
import HeaderNavbar from "../../navbar/headerNavbar/HeaderNavbar";
import "./VacanciesAddPage.css";
import React from "react";

const VacanciesAddPage = () => {
  const vacancy = useSelector((state) => state.search.vacancy);

  const dispatch = useDispatch()
  console.log(vacancy[3])

  const [positionText, setPositionText] = useState("");
  const [salaryText, setSalaryText] = useState("");
  const [companyText, setCompanyText] = useState("");
  const [cityText, setCityText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  const positionTextChange = (e) => {
    setPositionText(e.target.value);
  };

  const salaryTextChange = (e) => {
    setSalaryText(e.target.value);
  };

  const companyTextChange = (e) => {
    setCompanyText(e.target.value);
  };

  const cityTextChange = (e) => {
    setCityText(e.target.value);
  };

  const descriptionTextChange = (e) => {
    setDescriptionText(e.target.value);
  };

  const handleClickVacancy = () => {
    dispatch(createVacancy({positionText, salaryText, companyText, cityText, descriptionText}))
  }

  return (
    <div className="vacanciesAddPageContainer">
      <HeaderNavbar />
      <div className="vacanciesAddPageMain">
        <div className="vacanciesAddPage-LeftContent"></div>

        <div className="vacanciesAddPage-RightContent">
          <div className="vacanciesTittle">
            <h2>Размещение вакансии</h2>
            <Button variant="contained">Очистить форму</Button>
          </div>

          <div className="vacanciesPosition">
            <h3>Должность</h3>
            <input
              type="text"
              placeholder="Например: Frontend-Разработчик"
              value={positionText}
              onChange={positionTextChange}
            />
          </div>

          <div className="vacanciesSalary">
            <h3>Зарплата</h3>
            <input
              type="text"
              placeholder="Например: 60000р"
              value={salaryText}
              onChange={salaryTextChange}
            />
          </div>

          <div className="vacanciesCompany">
            <h3>Компания</h3>
            <input
              type="text"
              placeholder="Например: OOO 'Intocode'"
              value={companyText}
              onChange={companyTextChange}
            />
          </div>

          <div className="vacanciesCity">
            <h3>Город</h3>
            <input
              type="text"
              placeholder="Например: Урус-Мартан"
              value={cityText}
              onChange={cityTextChange}
            />
          </div>

          <div className="vacanciesText">
            <h3>Описание</h3>
            <input
              type="text"
              placeholder="Например: Чисто верстальщик вез"
              value={descriptionText}
              onChange={descriptionTextChange}
            />
          </div>

          <div className="btnAddVacancy">
            <Button variant="contained" onClick={() => handleClickVacancy()}>Добавить вакансию</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacanciesAddPage;
