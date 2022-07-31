import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../../images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, patchResume, postResume } from "../../feauters/resumeSlice";
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
  const [education, setEducation] = useState(false);
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const stack = useSelector((state) => state.resume.stack);

  const searchStack = stack.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );

  // console.log(searchStack)

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

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const addFile = () => {
    dispatch(
      postResume({
        img,
        name,
        surName,
        age,
        phone,
        email,
        city,
        position,
        experience,
      }),
      patchResume({category})
    );
    console.log(category);
    // setImg("");
    // setName("");
    // setSurName("");
    // setAge("");
    // setPhone("");
    // setEmail("");
    // setCity("");
    // setCategory([]);
    // setPosition("");
    // setExperience("");
  };

  const clearForm = () => {
    setImg("");
    setName("");
    setSurName("");
    setAge("");
    setPhone("");
    setEmail("");
    setCity("");
    setCategory([]);
    setPosition("");
    setExperience("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurNameChange = (e) => {
    setSurName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchStack = (e) => {
    setText(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };
  // setCategory(category.filter(item => item.name !== item.name))
  const handlePush = (item, index) => {
    setCategory(Array.from(new Set([...category, item])));
  };

  const handleRemoveStack = (item) => {
    setCategory(
      category.filter((element) => {
        if (item._id === element._id) {
          console.log(item._id);
          return false;
        }
        return true;
      })
    );
  };

  return (
    <div className="resumeBigMain">
      <div className="resumeMain">
        <h1 className="h1nishe">Составить резюме</h1>

        <hr className="hrishe"></hr>
        <div className="avatar">
          <div className="inputsName">
            <div className="inputText2">
              Имя
              <input
                className="inputTexts3"
                type="text"
                value={name}
                placeholder="Ваше имя"
                onChange={(e) => handleNameChange(e)}
              />
            </div>
            <div className="inputText2">
              Фамилия
              <input
                className="inputTexts3"
                type="text"
                value={surName}
                placeholder="Фамилия"
                onChange={(e) => handleSurNameChange(e)}
              />
            </div>
          </div>
          <div className="addFoto">
            {avatar ? (
              <img className="fotografia" src={`${avatar}`} alt="avatar" />
            ) : (
              <img className="fotografia" src={`${logo}`} alt="avatar" />
            )}
            <label htmlFor="file">
              <div className="text-foto">Добавить фото</div>
            </label>
          </div>
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
          <div className="inputText">
            Возраст
            <input
              className="inputTexts"
              type="text"
              value={age}
              placeholder="Ваш возраст"
              onChange={(e) => handleAgeChange(e)}
            />
          </div>
          <div className="inputText">
            Телефон
            <input
              className="inputTexts"
              type="tel"
              value={phone}
              placeholder="+7(999)-999-99-99"
              onChange={(e) => handlePhoneChange(e)}
            />
          </div>
          <div className="inputText">
            Email
            <input
              className="inputTexts"
              type="text"
              value={email}
              placeholder="Наприимер: intocode@mail.ru"
              onChange={(e) => handleEmailChange(e)}
            />
          </div>
          <div className="inputText">
            Город
            <input
              className="inputTexts"
              type="text"
              value={city}
              placeholder="Ваш город"
              onChange={(e) => handleCityChange(e)}
            />
          </div>
          {/* <div>{category}</div> */}
          <div className="inputText">
            Опыт работы
            <input
              className="inputTexts"
              type="text"
              value={experience}
              placeholder="Опыт работы"
              onChange={(e) => handleExperienceChange(e)}
            />
          </div>
          <div className="inputText">
            Должность
            <input
              className="inputTexts"
              type="text"
              value={position}
              placeholder="Ваша специализация"
              onChange={(e) => handlePositionChange(e)}
            />
          </div>
          <div className="inputText">
            Ваш Stack
            <input
              className="inputTexts"
              type="text"
              value={text}
              placeholder="Ваши умения"
              onChange={(e) => handleSearchStack(e)}
            />
          </div>
          <div className="StackFetch">
            {category.map((item, id) => {
              return (
                <div className="stack-result" key={id}>
                  {item.name}
                  <button
                    className="remove_btn"
                    onClick={() => handleRemoveStack(item)}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="btns-result">
          <button className="btnFoto" onClick={clearForm}>
            Очистить форму
          </button>
          <button className="btnFoto" onClick={addFile}>
            Создать резюме
          </button>
        </div>

        <div>
          {searchStack.map((item, index) => {
            return (
              <div className="stackList" key={index}>
                <button onClick={() => handlePush(item._id, index)}>
                  {item.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
