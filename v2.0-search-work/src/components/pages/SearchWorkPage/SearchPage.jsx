import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchPage.module.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchResponse, patchVacancies, postResponses } from "../../feauters/searchVacanciSlice";
import { useState } from "react";


const SearchPage = ({arr}) => {


const response = useSelector(state => state.search.response);
// const checked = useSelector(state => state.search.checked)
const dispatch = useDispatch()


// const responseMap = response.map((item) => {
//   return (
//     <div>{item.name}</div>
//   )
// })

const addResponse = (element, checked) => {
  dispatch(postResponses({element, checked}))
  dispatch(patchVacancies({element, checked}))
  
}


useEffect(() => {
  dispatch(fetchResponse())
},[dispatch])
  
   return (
    <div className={styles.mainCard}>
      <div className={styles.divHeaderNavbar}>
      </div>
      <div className={styles.cardVacancy}>
        {arr.map((element, id) => {
          return( 
            <div key={id} className={styles.cardListVacancy}>
              <h4><Link to={`/viewVacancy/${element._id}`}>{element.name}</Link></h4>
              
              <h5>{element.salary}</h5>
              <div>{element.company}</div>
              <h5>{element.city}</h5>
              <div>{element.text.slice(0, 70) + "..."}</div>
              <hr/>
              <div>{!element.checked ? <button className={styles.otclickBtn} onClick={() => addResponse(element._id, element.checked)}>откликнуться</button>
              : <button className={styles.otclickBtn} onClick={() => addResponse(element._id, element.checked)}>Вы откликнулись</button>}</div>
            </div>
          )
          ;
        })}
        
      </div>
    </div>

  );
};

export default SearchPage;

