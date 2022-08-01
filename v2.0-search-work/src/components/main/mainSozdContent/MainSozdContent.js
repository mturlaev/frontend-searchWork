import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVacancy } from "../../feauters/searchVacanciSlice";
import "./mainSozdContent.css";
import MainSozdContentGetResume from "./mainSozdContentGetResume/mainSozdContentGetResume";

export default function MainSozdContent() {
  const dispatch = useDispatch();

  const vacancy = useSelector((state) => state.search.vacancy);
  const [vacancyLength, setVacancyLength] = useState(8);
  const [vacancyOrResume, setVacancyOrResume] = useState(true)

  useEffect(() => {
    dispatch(fetchVacancy());
  }, [dispatch]);

  const handleClick = () => {
    setVacancyLength(vacancyLength + 4);
  };

  const handleClickVacancyCard = () => {
      setVacancyOrResume(true)
  }

  const handleClickResumeCard = () => {
    setVacancyOrResume(false)
}

  return (
    <div className="mainSozdContentContainer">
      <div className="mainSozdContentTittle">
        <div className="tittleText">
          <h1>Belhlo -</h1>
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
          <h1>103 731 ₽</h1>
          <h3>средняя зарплата в сфере IT</h3>
        </div>
        <div className="mainSozdContentTextVacancy">
          <h1>3 368</h1>
          <h3>вакансий уже тут</h3>
        </div>
      </div>

      <div className="mainSozdContentVacancyOrResume">
          <Button variant="contained" onClick={handleClickVacancyCard}>Список вакансий</Button>
          <Button variant="contained" onClick={handleClickResumeCard}>Список резюме</Button>
      </div>

        {(vacancyOrResume) ? 
      <div className="mainSozdContentVacancyCard">
        {vacancy.slice(0, vacancyLength).map((item, id) => {
          return (
            <div key={id} className="mainSozdContentVacancyCard-OneVacancy">
              <div className="mainSozdContentVacancyCard-Tittle">
                <div className="mainSozdContentVacancyCard-Company">
                  {item.company}
                </div>
                <div className="mainSozdContentVacancyCard-City">
                  {item.city}
                </div>
              </div>
              <div className="mainSozdContentVacancyCard-Name">
                <Link to={`/viewVacancy/${item._id}`}>{item.name}</Link>
              </div>
              <div className="mainSozdContentVacancyCard-Salary">
                <div className="mainSozdContentVacancyCard-Salary-Btn">
                  От {item.salary}p<button>otclick</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
       : <MainSozdContentGetResume />}

      <div className="mainSozdContentVacancyCardBtn">
        <button onClick={handleClick}>Показать больше</button>
      </div>

      <div className="mainSozdContentVacancyFooterText">
        <div className="mainSozdContentVacancyFooterTextTittle">
        Belhlo Разработка:
        </div>
        <div className="mainSozdContentVacancyFooterTextImg">
          <img
            src="https://pngicon.ru/file/uploads/vk.png"
            width={"35px"}
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"
            width={"35px"}
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/640px-Telegram_Messenger.png"
            width={"35px"}
            alt=""
          />
          <img
            src="https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png"
            width={"35px"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
