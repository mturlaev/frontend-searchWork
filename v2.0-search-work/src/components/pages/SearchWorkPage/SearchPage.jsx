import { useSelector } from "react-redux";
import styles from "./SearchPage.module.css";


const SearchPage = () => {

  const vacancy = useSelector((state) => state.search.vacancy);
  

  
   return (
    <div className={styles.mainCard}>
      <div className={styles.divHeaderNavbar}>
      </div>
      <div className={styles.cardVacancy}>
        {vacancy.map((element, id) => {
          return (
            <div key={id} className={styles.cardListVacancy}>
              <h5>{element.name}</h5>
              <div>{element.salary}</div>
              <div>{element.company}</div>
              <div>{element.city}</div>
              <div>{element.text.slice(0, 70) + "..."}</div>
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default SearchPage;

