import React from 'react';
import style from "./signInUp.module.css";

const PreSignIn = () => {
  return (
    <div className={style.container}>
    <div className={style.preSignIn}>
      На вашу почту было отправлено письмо с ссылкой, пожалуйста перейдите по ней для подтверждения вашей почты!
    </div>
    </div>
  );
};

export default PreSignIn;