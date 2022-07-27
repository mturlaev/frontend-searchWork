import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../../images/logo.svg";
import { useDispatch } from "react-redux";
import { postResume } from "../../feauters/resumeSlice";
import "./ResumePage.css";

const ResumePage = () => {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState([]);
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    if (img) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(img);
    } else {
      setAvatar(null);
    }
  }, [img]);

  const addFile = () => {
    dispatch(postResume(img));
    setImg("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value)
  };

  const handleSurNameChange = (e) => {
    setSurName(e.target.value)
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleCityChange = (e) => {
    setCity(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handlePositionChange = (e) => {
    setPosition(e.target.value)
  }

  const handleExperienceChange = (e) => {
    setExperience(e.target.value)
  }




  return (
    <div className="resumeMain">
      <div className="avatar">
        <div className="inputsName">
          <div className="inputText">Имя
          <input type="text"
          value={name}
          onChange={(e) => handleNameChange(e)} /></div>
          <div className="inputText">Фамилия
          <input type="text"
          value={surName}
          onChange={(e) => handleSurNameChange(e)} /></div>
        </div>
        {avatar ? (
          <img className="fotografia" src={`${avatar}`} alt="avatar" />
        ) : (
          <img className="fotografia" src={`${logo}`} alt="avatar" />
        )}
        <label htmlFor="file">
          <img
            className="inputFoto"
            src="https://static.wixstatic.com/media/9e01b4_bc4361b7a827422ca27367c254ae7dd8~mv2.png/v1/fill/w_360,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Copyediting.png"
            alt=""
          />
        </label>
        <input
          hidden
          id="file"
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file && file.type.substring(0, 5) === "image") {
              setImg(file);
            } else {
              setImg(null);
            }
          }}
        />
      </div>
      <div className="inputsMain">
        <div className="inputText">Возраст
        <input type="text"
        value={age}
        onChange={(e) => handleAgeChange(e)} /></div>
        <div className="inputText">Телефон
        <input type="text"
        value={phone}
        onChange={(e) => handlePhoneChange(e)} /></div>
        <div className="inputText">Email
        <input type="text"
        value={email}
        onChange={(e) => handleEmailChange(e)} /></div>
        <div className="inputText">Город
        <input type="text"
        value={city}
        onChange={(e) => handleCityChange(e)} /></div>
        <div></div>
        <div className="inputText">Ваш Stack
        <input type="text"
        value={category}
        onChange={(e) => handleCategoryChange(e)} /></div>
        <div className="inputText">Должность
        <input type="text"
        value={position}
        onChange={(e) => handlePositionChange(e)} /></div>
        <div className="inputText">Опыт работы
        <input type="text"
        value={experience}
        onChange={(e) => handleExperienceChange(e)} /></div>
        <div className="inputText">Наличие высшего образования</div>
      </div>
        <button className="btnFoto" onClick={addFile}>
          Создать резюме
        </button>
    </div>
  );
};

export default ResumePage;
