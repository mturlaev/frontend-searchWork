import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footerMain'>
            <div className='applicants'>
                <h4>Соискателям</h4>
                <div className='footerText'><Link to="/resume">Создать резюме</Link></div>
                <div className='footerText'><Link to="/search/vacancy">Поиск работы</Link></div>
                <div className='footerText'><Link to="/catalog/vacancies">Каталог вакансий</Link></div>
            </div>
            <div className='employers'>
                <h4>Работадателям</h4>
                <div className='footerText'><Link to="/vacancy">Разместить вакансию</Link></div>
                <div className='footerText'><Link to="/catalog/vacancies">Поиск сотрудника</Link></div>
            </div>
            <div className='lorem'>
                <h4>lorem</h4>
                <div className='footerText'>lorem</div>
                <div className='footerText'>lorem</div>
                <div className='footerText'>lorem</div>
            </div>
            <div className='lorem'>
                <h4>lorem</h4>
                <div className='footerText'>lorem</div>
                <div className='footerText'>lorem</div>
                <div className='footerText'>lorem</div>
            </div>
            <div className='lorem'>
                <h4>lorem</h4>
                <div className='footerText'>lorem</div>
                <div className='footerText'>lorem</div>
                <div className='footerText'>lorem</div>
            </div>
        </div>
    );
};

export default Footer;