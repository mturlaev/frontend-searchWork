import React from 'react';
import { Route, Routes } from "react-router-dom"
import CatalogPage from '../navbar/mainNavbar/pages/CatalogResumePage/CatalogPage';
import HomePage from '../navbar/mainNavbar/pages/HomePage/HomePage';
import ResumePage from '../navbar/mainNavbar/pages/ResumePage/ResumePage';
import SearchPage from '../navbar/mainNavbar/pages/SearchWorkPage/SearchPage';
import VacanciesAddPage from '../navbar/mainNavbar/pages/VacanciesAdd/VacanciesAddPage';
import VacanciesPage from '../navbar/mainNavbar/pages/VacanciesPage/VacanciesPage';
import SignUp from '../RegAuth/SignUp';
import SignIn from '../RegAuth/SignIn';
import PreSignIn from '../RegAuth/PreSignIn';

const MainRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/catalog/resumes' element={<CatalogPage/>} />
                <Route path='/resume' element={<ResumePage/>} />
                <Route path='/search/vacancy' element={<SearchPage/>} />
                <Route path='/vacancy' element={<VacanciesAddPage/>} />
                <Route path='/catalog/vacancies' element={<VacanciesPage/>} />
                <Route path='/signUp' element={<SignUp />}/>
                <Route path='/signIn' element={<SignIn />}/>
                <Route path="/" element={<HomePage />} />
                <Route path='/preSignIn' element={<PreSignIn />} />
            </Routes>
        </div>
    );
};


export default MainRoute;