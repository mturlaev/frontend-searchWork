import { Link } from "react-router-dom";
import "./headerNavbar.css";

function HeaderNavbar() {
  const handleClick = () => {
    alert("БОЛХ БЕШ ЯЦ ПОКА СОБАР ДЕ");
    alert("ахмат сила")
  };
  return (
    <div className="headerNavbarMain">
      <div className="leftBox-navbarMain">
        <button>
          <img
            src="https://vibromotors.ru/img/mobile-menu-icon.png"
            alt="anzor"
            width={"20px"}
            onClick={handleClick}
          />
        </button>
        <h3><Link to='/'>Название</Link></h3>
      </div>

      <div className="mainBox-navbarMain">
        <input type="text" placeholder="Поиск" />
        <button onClick={handleClick}>Найти</button>
      </div>

      <div className="rightBox-navbarMain">
        <button onClick={handleClick}>8-800-555-35-35</button>
        <button onClick={handleClick}>
          ？
        </button>
        <button onClick={handleClick}>Вход</button>
        <button onClick={handleClick}>Регистрация</button>
      </div>
    </div>
    
  );
}

export default HeaderNavbar;
