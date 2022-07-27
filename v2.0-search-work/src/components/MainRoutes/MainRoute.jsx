import React from "react";
import { Route, Routes } from "react-router-dom";
import CatalogPage from "../pages/CatalogResumePage/CatalogPage";
import HomePage from "../pages/HomePage/HomePage";
import ResumePage from "../pages/ResumePage/ResumePage";
import SearchPage from "../pages/SearchWorkPage/SearchPage";
import VacanciesAddPage from "../pages/VacanciesAdd/VacanciesAddPage";
import VacanciesPage from "../pages/VacanciesPage/VacanciesPage";
import PreSignIn from "../RegAuth/PreSignIn";
import SignIn from "../RegAuth/SignIn";
import SignUp from "../RegAuth/SignUp";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/catalog/resumes" element={<CatalogPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/search/vacancy" element={<SearchPage />} />
        <Route path="/vacancy" element={<VacanciesAddPage />} />
        <Route path="/catalog/vacancies" element={<VacanciesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/preSign" element={<PreSignIn />} />
      </Routes>
    </div>
  );
};
export default MainRoute;
