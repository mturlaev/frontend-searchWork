import { Button } from "@mui/material";
import HeaderNavbar from "../../navbar/headerNavbar/HeaderNavbar";
import "./VacanciesAddPage.css";
import React from "react";

const VacanciesAddPage = () => {
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
            <input type="text" placeholder="Например: Frontend-Разработчик" />
          </div>

          <div className="vacanciesSalary">
            <h3>Зарплата</h3>
            <input type="text" placeholder="Например: 60000р" />
          </div>

          <div className="vacanciesCompany">
            <h3>Компания</h3>
            <input type="text" placeholder="Например: OOO 'Intocode'" />
          </div>

          <div className="vacanciesCity">
            <h3>Город</h3>
            <input type="text" placeholder="Например: Урус-Мартан" />
          </div>

          <div className="vacanciesText">
            <h3>Описание</h3>
            <input type="text" placeholder="Например: Чисто верстальщик вез" />
          </div>

          <div className="btnAddVacancy">
            <Button variant="contained">Добавить вакансию</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacanciesAddPage;
