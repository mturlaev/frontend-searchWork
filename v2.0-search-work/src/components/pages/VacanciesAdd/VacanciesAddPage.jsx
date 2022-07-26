import React from "react";
import HeaderNavbar from "../../navbar/headerNavbar/HeaderNavbar";
import "./VacanciesAddPage.css";

const VacanciesAddPage = () => {
  return (
    <div className="vacanciesAddPageContainer">
      <HeaderNavbar />
      <div className="vacanciesAddPageMain">
        <div className="vacanciesAddPage-LeftContent"></div>

        <div className="vacanciesAddPage-RightContent">
          <div className="vacanciesTittle">
            <h2>Размещение вакансии</h2>
            <button>Очистить форму</button>
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

          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default VacanciesAddPage;
