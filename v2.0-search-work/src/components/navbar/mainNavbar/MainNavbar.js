import "./mainNavbar.css";
export default function MainNavbar() {
  return (
    <div className="mainContainer">
      <div className="mainContainerLeftBox">
        <h3>Работа</h3>
        <p>
          Название - это лучшие предложения высокооплачиваемой работы
          от российских и  зарубежных компаний.
        </p>
        <button>Разместить резюме</button>
      </div>
      
      <div className="mainContainerRightBox">
        <h3>Сотрудники</h3>
        <p>
          Название — самая большая и качественная база резюме лучших
          специалистов в России.
        </p>
        <button>Разместить вакансию</button>
      </div>
    </div>
  );
}
