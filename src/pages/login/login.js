import React, { useState } from 'react';

import './login-style.scss';


function Login() {

const [inputEmail, setInputEmail] = useState('Email');
const [inputPass, setInputPass] = useState('Password');
const [checkon, setCheckon] = useState();
const [errEmail, setErrEmail] = useState('textHide');
const [errPass, setErrPass] = useState('textHide');


const changeInputEmail = (e) => setInputEmail(e.target.value);
const changeInputPass = (e) => setInputPass(e.target.value);
const checkCheckbox = (e) => setCheckon(e.target.checked);
const changeTypePass = checkon ? 'text' : 'password';
const checkSymbolEmail = inputEmail.includes('@');
const checkDot = inputEmail.includes('.');
const textHide = 'textHide';
const checkLenghtPass = inputPass.length;
const textInvalid = 'loginInvalid';
let errBtn = textHide;

const checkInputEmail = () => {
  if(checkDot == true) {
    if(checkSymbolEmail == true) {
    return textHide;
    }
  }
return textInvalid;
}

const checkInputPass = (e) => {
  if(checkLenghtPass > 8) {
    return textHide;
  }
  return textInvalid;
}

function handleSubmit(e) {
  if(errPass == textHide && errEmail == textHide) {
    console.log(
      'Email: ' + inputEmail,
      'Password: ' + inputPass,
    );
    e.preventDefault();
  }
}

console.log();

  return (
    <div className="login-container">
      
      <form className="login-form" onSubmit={handleSubmit} method='GET'>
        
        <h1 className="login-title">
          Login
        </h1>

        <div className='block-input'>
          <input 
          onChange={changeInputEmail} 
          onBlur={() => setErrEmail(checkInputEmail)}
          type='text' 
          placeholder={inputEmail}
          size='26'
          id='email' 
          required />
        </div>
        
        <span className={errEmail}>Email должен содержать '@' и '.'!</span>
        
        <div className='block-input'>
          <input 
          onChange={changeInputPass}
          onBlur={() => setErrPass(checkInputPass)}
          type={changeTypePass} 
          placeholder={inputPass} 
          size='26'
          id='pwd'
          required />
        </div>

        <span className={errPass}>Должно быть более 7 символов!</span>
        
        <div className="login-checkbox">
          <input 
          type="checkbox"
          onClick={checkCheckbox} 
          />
        </div>
        
        <span className='login-text-checkbox'>
        show password
        </span>
        
        <div className="login-button">
          <button 
          type="submit">
            <span>sign in</span>
          </button>
        </div>  
      
        <span className={errBtn}>Вы не заполнили поля формы!</span>

      </form>
    </div>
  );
}

export default Login;


