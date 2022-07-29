import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVacancy } from "../../feauters/searchVacanciSlice";
import "./mainSozdContent.css";

export default function MainSozdContent() {
  const dispatch = useDispatch();

  const vacancy = useSelector((state) => state.search.vacancy);

  useEffect(() => {
    dispatch(fetchVacancy());
  }, [dispatch]);

  const handleCklick = () => {
    alert();
  };

  return (
    <div className="mainSozdContentContainer">
      <div className="mainSozdContentTittle">
        <div className="tittleText">
          <h1>Название -</h1>
          <h3>это платформа для поиска работы</h3>
        </div>
      </div>

      <div className="mainSozdContentText">
        <div className="mainSozdContentTextResume">
          <h1>127840</h1>
          <h3>резюме уже тут</h3>
        </div>
        <div className="mainSozdContentTextCompany">
          <h1>639</h1>
          <h3>компаний ищут сотрудников прямо сейчас</h3>
        </div>
        <div className="mainSozdContentTextSalary">
          <h1>203 731 ₽</h1>
          <h3>компаний ищут сотрудников прямо сейчас</h3>
        </div>
        <div className="mainSozdContentTextVacancy">
          <h1>3 368</h1>
          <h3>вакансий уже тут</h3>
        </div>
      </div>

      <div className="mainSozdContentVacancyCard">
        {vacancy.map((item, id) => {
          return (
            <div
              key={id}
              className="mainSozdContentVacancyCard-OneVacancy"
              onClick={handleCklick}
            >
              <div className="mainSozdContentVacancyCard-Tittle">
                <div className="mainSozdContentVacancyCard-Company">
                  {item.company}
                </div>
                <div className="mainSozdContentVacancyCard-City">
                  {item.city}
                </div>
              </div>
              <div className="mainSozdContentVacancyCard-Name">{item.name}</div>
              <div className="mainSozdContentVacancyCard-Salary">
                <div></div>
                От {item.salary}p
              </div>
            </div>
          );
        })}
      </div>

      <div className="mainSozdContentVacancyFooterImg"></div>
    </div>
  );
}
