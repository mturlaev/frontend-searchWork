import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <>
        <div className='footerMain'>
            <div className='applicants'>
                <h5>Соискателям</h5>
                <div className='footerText'><Link to="/resume">Создать резюме</Link></div>
                <div className='footerText'><Link to="/search/vacancy">Поиск работы</Link></div>
                <div className='footerText'><Link to="/catalog/vacancies">Каталог вакансий</Link></div>
            </div>
            <div className='employers'>
                <h5>Работадателям</h5>
                <div className='footerText'><Link to="/vacancy">Разместить вакансию</Link></div>
                <div className='footerText'><Link to="/catalog/vacancies">Поиск сотрудника</Link></div>
                <div className='footerText'><Link to="/admin">Личный Кабинет</Link></div>
            </div>
            <div className='lorem'>
                <h5>Партнерам</h5>
                <div className='footerText'>Реклама на сайте</div>
                <div className='footerText'>Реклама вакансий</div>
                <div className='footerText'>Интеграционные сервисы</div>
            </div>
            <div className='lorem1'>
                <h5>Belhlo</h5>
                <div className='footerText'>О компании</div>
                <div className='footerText'>Новости сервиса</div>
                <div className='footerText'>Работа в Belhlo</div>
            </div>
            {/* <div className='lorem'>
                <h4>lorem</h4>
                <div className='footerText'>lorem</div>
                <div className='footerText'>lorem</div>
                <div className='footerText'>lorem</div>
            </div> */}
        </div>
        </>
    );
};

export default Footer;