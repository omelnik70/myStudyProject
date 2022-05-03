import React, { useState } from 'react';

import './login-style.scss';


function Login() {

const [inputEmail, setInputEmail] = useState('Email');
const [inputPass, setInputPass] = useState('Password');
const [checkon, setCheckon] = useState();
const [errEmail, setErrEmail] = useState('login-text-email-hide');
const [errPass, setErrPass] = useState('login-text-pass-hide');


const changeInputEmail = (e) => setInputEmail(e.target.value);
const changeInputPass = (e) => setInputPass(e.target.value);
const checkCheckbox = (e) => setCheckon(e.target.checked);
const changeTypePass = checkon ? 'text' : 'password';
const checkSymbolEmail = inputEmail.includes('@');
const checkDot = inputEmail.includes('.');
const textInvalidEmail = 'login-text-email-invalid';
const textHideEmail = 'login-text-email-hide';
const textInvalidPass = 'login-text-pass-invalid';
const textHidePass = 'login-text-pass-hide';
const checkLenghtPass = inputPass.length;

const checkInputEmail = () => {
  if(checkDot == true) {
    if(checkSymbolEmail == true) {
    return textHideEmail;
    }
  }
return textInvalidEmail;
}

const checkInputPass = (e) => {
  if(checkLenghtPass > 8) {
    return textHidePass;
  }
  return textInvalidPass;
}

function handleSubmit(e) {
  console.log(
    'Email: ' + inputEmail,
    'Password: ' + inputPass,
  );
  e.preventDefault();
}

  return (
    <div className="login-container">
      
      <form className="login-form" onSubmit={handleSubmit} method='GET'>
        
        <h1 className="login-title">
          Login
        </h1>

        <div className='login-email'>
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
        
        <div className='login-password'>
          <input 
          onChange={changeInputPass}
          onBlur={() => setErrPass(checkInputPass)}
          type={changeTypePass} 
          placeholder={inputPass} 
          size='26'
          id='pwd'
          required />
        </div>

        <span className={errPass}>Должно быть более 8 символов!</span>
        
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
          type="submit"
          value="submit">
            <span>sign in</span>
          </button>
        </div>  
      
      </form>
    </div>
  );
}

export default Login;


