import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderNavbar from "../navbar/headerNavbar/HeaderNavbar";
import CatalogPage from "../pages/CatalogResumePage/CatalogPage";
import HomePage from '../pages/HomePage/HomePage'
import ResumePage from "../pages/ResumePage/ResumePage";
import VacanciesAddPage from "../pages/VacanciesAdd/VacanciesAddPage";
import VacanciesPage from "../pages/VacanciesPage/VacanciesPage";
import PreSignIn from "../RegAuth/PreSignIn";
import SignIn from "../RegAuth/SignIn";
import SignUp from "../RegAuth/SignUp";
import ViewVacancyPage from "../pages/viewVacancy/viewVacancyPage"


const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/catalog/resumes" element={<CatalogPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/search/vacancy" element={<HeaderNavbar />} />
        <Route path="/vacancy" element={<VacanciesAddPage />} />
        <Route path="/catalog/vacancies" element={<VacanciesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/preSign" element={<PreSignIn />} />
        <Route path="/viewVacancy/:id" element={<ViewVacancyPage />} />

      </Routes>
    </div>
  );
};

export default MainRoute;


