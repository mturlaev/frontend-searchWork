import React from "react";
import { Route, Routes } from "react-router-dom";
import CatalogPage from "../pages/CatalogResumePage/CatalogPage";
import ResumePage from "../pages/ResumePage/ResumePage";
import SearchPage from "../pages/SearchWorkPage/SearchPage";
import VacanciesAddPage from "../pages/VacanciesAdd/VacanciesAddPage";
import VacanciesPage from "../pages/VacanciesPage/VacanciesPage";
import HomePage from '../pages/HomePage/HomePage'

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/catalog/resumes" element={<CatalogPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/search/vacancy" element={<SearchPage />} />
        <Route path="/vacancy" element={<VacanciesAddPage />} />
        <Route path="/catalog/vacancies" element={<VacanciesPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
