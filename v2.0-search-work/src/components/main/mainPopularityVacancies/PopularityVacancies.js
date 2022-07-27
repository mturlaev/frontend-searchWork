import "./popularityVacancies.css";
import React from "react";

export default function PopularityVacancies() {
  return (
    <div className="popularityVacanciesMain">
      <div className="popularityVacanciesTittle">
        <h6>Вакансии в вашем городе</h6>
        <button>Все вакансии</button>
      </div>

      <hr />

      <div className="popularityVacanciesList">
        <div className="oneVacancy">
          <div className="dataTimeVac">Сегодня в 14:45</div>
          <div className="positionVac">
            <h5>Frontend-Разработчик</h5>
          </div>
          <div className="salaryVac">45 г1аьхь ду руб./месяц</div>
          <div className="companyVac">
            <div className="companyImg">
              <img
                src="https://avatars.githubusercontent.com/u/75647218?s=200v=4"
                alt="anzor"
              />
            </div>
            <div className="companyNameAndCity">
              <p>"Intocode"</p>
              <p>г. Грозный</p>
            </div>
          </div>
          <div className="buttonOtclick">
            <button>Откликнуться</button>
          </div>
        </div>

        <div className="oneVacancy">
          <div className="dataTimeVac">Сегодня в 14:45</div>
          <div className="positionVac">
            <h5>Frontend-Разработчик</h5>
          </div>
          <div className="salaryVac">45 г1аьхь ду руб./месяц</div>
          <div className="companyVac">
            <div className="companyImg">
              <img
                src="https://avatars.githubusercontent.com/u/75647218?s=200v=4"
                alt="anzor"
              />
            </div>
            <div className="companyNameAndCity">
              <p>"Intocode"</p>
              <p>г. Грозный</p>
            </div>
          </div>
          <div className="buttonOtclick">
            <button>Откликнуться</button>
          </div>
        </div>

        <div className="oneVacancy">
          <div className="dataTimeVac">Сегодня в 14:45</div>
          <div className="positionVac">
            <h5>Frontend-Разработчик</h5>
          </div>
          <div className="salaryVac">45 г1аьхь ду руб./месяц</div>
          <div className="companyVac">
            <div className="companyImg">
              <img
                src="https://avatars.githubusercontent.com/u/75647218?s=200v=4"
                alt="anzor"
              />
            </div>
            <div className="companyNameAndCity">
              <p>"Intocode"</p>
              <p>г. Грозный</p>
            </div>
          </div>
          <div className="buttonOtclick">
            <button>Откликнуться</button>
          </div>
        </div>

      </div>
    </div>
  );
}
