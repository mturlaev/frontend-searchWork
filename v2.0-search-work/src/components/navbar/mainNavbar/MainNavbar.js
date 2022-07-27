import { Link } from "react-router-dom";
import "./mainNavbar.css";
import React from "react";

export default function MainNavbar() {
  return (
    <div className="mainContainer">
      <div className="mainContainerLeftBox">
        <h3>Работа</h3>
        <p>
          Название - это лучшие предложения высокооплачиваемой работы
          от российских и  зарубежных компаний.
        </p>
        <Link to="/resume"><button>Разместить резюме</button></Link>
      </div>
      
      <div className="mainContainerRightBox">
        <h3>Сотрудники</h3>
        <p>
          Название — самая большая и качественная база резюме лучших
          специалистов в России.
        </p>
        <Link to="/vacancy"><button>Разместить вакансию</button></Link>
      </div>
    </div>
  );
}
