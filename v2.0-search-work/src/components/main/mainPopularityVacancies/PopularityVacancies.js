import "./popularityVacancies.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addResponse, fetchVacancy } from "../../feauters/searchVacanciSlice";

export default function PopularityVacancies() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const vacancy = useSelector((state) => state.search.vacancy);
  const vacancyPopularity = useSelector((state) => state.search.vacancy);

  useEffect(() => {
    dispatch(fetchVacancy());
  }, [dispatch]);

  const addResponseOnVacancy = (id) => {
    // if(user  === resume.userId){
    dispatch(addResponse({id}))
    // }
  }

  return (
    <div className="popularityVacanciesMain">
      <div className="popularityVacanciesTittle">
        <h6>Вакансии в вашем городе</h6>
        <button className="btnVacancies">
          <Link to="/search/vacancy">Все вакансии</Link>
        </button>
      </div>

      <hr />

      <div className="popularityVacanciesList">
        {vacancy.slice(0, 3).map((item, id) => {
          const checked = item.responses.find((item) => item === user);

          return (
            <div className="oneVacancy" key={id}>
              <div className="dataTimeVac">Сегодня в 14:45</div>
              <div className="positionVac">
                <h5>{item.name}</h5>
              </div>
              <div className="salaryVac">{item.salary} руб./месяц</div>
              <div className="companyVac">
                <div className="companyImg">
                  <img
                    src="https://avatars.githubusercontent.com/u/75647218?s=200v=4"
                    alt="anzor"
                  />
                </div>
                <div className="companyNameAndCity">
                  <p>{item.company}</p>
                  <p>{item.city}</p>
                </div>
              </div>
              <div>
              <div className="buttonOtclick">
            <button>Откликнуться</button>
          </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
