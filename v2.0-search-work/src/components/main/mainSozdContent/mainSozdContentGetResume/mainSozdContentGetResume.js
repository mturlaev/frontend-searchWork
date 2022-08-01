import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResume } from "../../../feauters/resumeSlice";
import "./mainSozdContentGetResume.css";

export default function MainSozdContentGetResume() {
  const resume = useSelector((state) => state.resume.resume);
  console.log(resume);
  return (
    <div className="mainSozdContentGetResume-Main">
      {resume.map((item, id) => {
        return (
          <div key={id} className="mainSozdContentGetResume-OneResume">
            <div className="mainSozdContentGetResume-Position">
              {item.position}
            </div>
            <div className="mainSozdContentGetResume-NameSurname">
              <p>{item.name}</p>
              <p>{item.surname}</p>
            </div>
            <div className="mainSozdContentGetResume-Exp">
              Стаж: {item.experience}
            </div>
            <div className="mainSozdContentGetResume-Contacts">
              <p>Номер: {item.phone}</p>
              <p>Email: {item.email}</p>
              <p></p>
            </div>
            <div className="mainSozdContentGetResume-Btn">
                    <button>otclick</button>
                  </div>
          </div>
        );
      })}
    </div>
  );
}
