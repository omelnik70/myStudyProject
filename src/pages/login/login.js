import React, { useState } from 'react';

import './login-style.scss';


function Login() {

const [textEmail, setTextEmail] = useState('');
const [textPass, setTextPass] = useState('');
const [blurEmail, setBlurEmail] = useState('textHide');
const [blurPass, setBlurPass] = useState('textHide');
const [checkon, setCheckon] = useState();
  
const emailChange = (e) => setTextEmail(e.target.value);
const passChange = (e) => setTextPass(e.target.value);
const checkboxOn = (e) => setCheckon(e.target.checked);
const changeTypePass = checkon ? 'text' : 'password';
const passRemoveDisabled = () => document.getElementById('pass').removeAttribute('disabled', '');
const boxRemoveDisabled = () => document.getElementById('box').removeAttribute('disabled', '');
const emailRemoveDisabled = () => document.getElementById('mail').removeAttribute('disabled', '');
const btnRemoveDisabled = () => document.getElementById('btn').removeAttribute('disabled', '');
const btnSetDisabled = () => document.getElementById('btn').setAttribute('disabled', '');
const passSetDisabled = () => document.getElementById('pass').setAttribute('disabled', '');
const emailSetDisabled = () => document.getElementById('mail').setAttribute('disabled', '');
const boxSetDisabled = () => document.getElementById('box').setAttribute('disabled', '');
const btnSetStyle = () => document.getElementById('btn').setAttribute('style', 'background: hsl(157, 74%, 17%);cursor: pointer');
const btnRemoveStyle = () => document.getElementById('btn').removeAttribute('style', 'background: hsl(157, 74%, 17%);cursor: pointer');

const blurOnEmail = () => setBlurEmail( function() {
  if(textEmail) {
    if(textEmail.includes('.') && textEmail.includes('@')) {
    passRemoveDisabled();
    boxRemoveDisabled();
    return 'textHide';
    }
  }
  passSetDisabled();
  boxSetDisabled();
  btnSetDisabled();
  btnRemoveStyle();
  return 'textInvalid';
})

const blurOnPass = () => setBlurPass( function() {
  if(textPass) {
    if(textPass.length > 7) {
    emailRemoveDisabled();
    return 'textHide';
    }
  }
  btnSetDisabled();
  btnRemoveStyle();
  emailSetDisabled();
  return 'textInvalid';
})

const checkButton = () => {
  if(textPass.length > 7 && textEmail.includes('.') && textEmail.includes('@')) {
    btnRemoveDisabled();
    btnSetStyle();
  }
}

function handleSubmit(e) {
    console.log(
    'Email: ' + textEmail,
    'Password: ' + textPass,
    );
    e.preventDefault();
}

  return (
    <div className='wrapper'>
      <div className="login-container">
      
        <form onMouseOver={checkButton} id="form" className="login-form" onSubmit={handleSubmit} method='GET'>
            
          <h1 className="login-title">
            Login
          </h1>
          
          <div className='block-input'>
            <div>
              <input 
              id='mail'
              onChange={emailChange}
              onBlur={blurOnEmail}
              type='text' 
              placeholder='Email'
              size='26' />
            </div>
                
            <div id='text' className={blurEmail}>
              Email должен содержать '@' и '.'!
            </div>
          </div>
              
          <div className='block-input'>
            <div>
              <input 
              id='pass'
              onChange={passChange}
              onBlur={blurOnPass}
              type={changeTypePass}
              placeholder='Password'
              size='26' />
            </div>
                
            <div className={blurPass}>
              Должно быть более 7 символов!
            </div>
          </div>
              
          <div className="login-checkbox">
            <input 
            id='box'
            onClick={checkboxOn}
            type="checkbox" />
          </div>
              
          <span className='login-text-checkbox'>
            show password
          </span>
              
          <button
          className="login-button" 
          id='btn'
          type="submit"
          disabled>
            sign in
          </button>     

        </form>
      </div>
    </div>
  );
}

export default Login;


