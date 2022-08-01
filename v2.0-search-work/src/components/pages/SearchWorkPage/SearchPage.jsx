import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchPage.module.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { addResponse, fetchResponse, patchVacancies, postResponses } from "../../feauters/searchVacanciSlice";
import { useState } from "react";


const SearchPage = ({arr}) => {
  const resume = useSelector(state => state.resume.resume)
  const user = useSelector(state => state.user.user)
const response = useSelector(state => state.search.response);
// const checked = useSelector(state => state.search.checked)
const dispatch = useDispatch()


// const responseMap = response.map((item) => {
//   return (
//     <div>{item.name}</div>
//   )
// })

const addResponseOnVacancy = (id) => {
  // if(user  === resume.userId){
  dispatch(addResponse({id}))
  // }
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
          const checked = element.responses.find(item => item === user)
          return( 
            <div key={id} className={styles.cardListVacancy}>
              <h4><Link to={`/viewVacancy/${element._id}`}>{element.name}</Link></h4>
              <h5>{element.salary}</h5>
              <div>{element.company}</div>
              <h5>{element.city}</h5>
              <div>{element.text.slice(0, 166) + "..."}</div>
              <hr/>
              <div>{!checked ? <button className={styles.otclickBtn} onClick={() => addResponseOnVacancy(element._id, element.checked)}>откликнуться</button>
              : <button disabled={checked} className={styles.otclickBtn2} onClick={() => addResponseOnVacancy(element._id)}>Вы откликнулись</button>}</div>
            </div>
          )
          ;
        })}
        
      </div>
    </div>

  );
};

export default SearchPage;

