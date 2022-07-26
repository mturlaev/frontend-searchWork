import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import logo from "../../images/logo.svg"
import { useDispatch } from "react-redux"
import { postResume } from '../../feauters/resumeSlice';
import "./ResumePage.css"

const ResumePage = () => {
    const [img, setImg] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const dispatch = useDispatch()

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
        dispatch(postResume(img))
        setImg("")
    }

    return (
        <div className='avatar'>
            {
                avatar
                ? <img className='fotografia' src={`${avatar}`} alt="avatar" />
                : <img className='fotografia' src={`${logo}`} alt="avatar" />
            }
            <label htmlFor="file"><img className='inputFoto' src="https://static.wixstatic.com/media/9e01b4_bc4361b7a827422ca27367c254ae7dd8~mv2.png/v1/fill/w_360,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Copyediting.png" alt="" /></label>
            <input hidden id='file' type='file' onChange={(e) => {
                const file = e.target.files[0];
                if (file && file.type.substring(0, 5) === "image") {
                  setImg(file);
                } else {
                  setImg(null);
                }
            }}/>
            <button className='btnFoto' onClick={addFile}>Создать резюме</button>
        </div>
    );
};

export default ResumePage;