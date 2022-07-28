import { useSelector } from "react-redux";
import styles from "./SearchPage.module.css";
import React from "react";
import { Link } from "react-router-dom";

const SearchPage = ({arr}) => {


  
   return (
    <div className={styles.mainCard}>
      <div className={styles.divHeaderNavbar}>
      </div>
      <div className={styles.cardVacancy}>
        {arr.map((element, id) => {
          return (
            <div key={id} className={styles.cardListVacancy}>
              <h4><Link to={`/viewVacancy/${element._id}`}>{element.name}</Link></h4>
              
              <h5>{element.salary}</h5>
              <div>{element.company}</div>
              <h5>{element.city}</h5>
              <div>{element.text.slice(0, 70) + "..."}</div>
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default SearchPage;

