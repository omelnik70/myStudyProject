import React, { useState } from 'react';

import Input from '../../components/form/Input';
import Button from '../../components/form/Button';

import styles from './styles.module.scss';


function Login() {

const [textEmail, setTextEmail] = useState('');
const [textPass, setTextPass] = useState('');
const [blurEmail, setBlurEmail] = useState(styles.textHide);
const [blurPass, setBlurPass] = useState(styles.textHide);
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
const EmailTextSetStyleNone = () => document.getElementById('textEmailInvalid').setAttribute('style', 'display: none;');
const EmailTextRemovetStyleNone = () => document.getElementById('textEmailInvalid').removeAttribute('style', 'display: none;');
const PassTextSetStyleNone = () => document.getElementById('textPassInvalid').setAttribute('style', 'display: none;');
const PassTextRemovetStyleNone = () => document.getElementById('textPassInvalid').removeAttribute('style', 'display: none;');
const resetData = () => document.getElementById('btn').setAttribute('type', 'reset');
const submitMessageRemove = () =>  document.getElementById('textBtnSend').classList.remove(styles.textHide);
const submitMessageAdd = () => document.getElementById('textBtnSend').classList.add(styles.textInvalid);

const blurOnEmail = () => setBlurEmail( function() {
  if(textEmail) {
    if(textEmail.includes('.') && textEmail.includes('@')) {
    passRemoveDisabled();
    boxRemoveDisabled();
    return styles.textHide;
    }
  }
  passSetDisabled();
  boxSetDisabled();
  btnSetDisabled();
  btnRemoveStyle();
  return styles.textInvalid;
})

const blurOnPass = () => setBlurPass( function() {
  if(textPass) {
    if(textPass.length > 7) {
    emailRemoveDisabled();
    return styles.textHide;
    }
  }
  btnSetDisabled();
  btnRemoveStyle();
  emailSetDisabled();
  return styles.textInvalid;
})

const checkButton = () => {
  if(textPass.length > 7 && textEmail.includes('.') && textEmail.includes('@')) {
    btnRemoveDisabled();
    btnSetStyle();
  }
}

const hideTextMouseEmail = () => {
  EmailTextSetStyleNone();
}

const showTextMouseEmail = () => {
  EmailTextRemovetStyleNone();
}

const hideTextMousePass = () => {
  PassTextSetStyleNone();
}

const showTextMousePass = () => {
  PassTextRemovetStyleNone();
}

const reset = () => {
  resetData();
}

function handleSubmit(e) {
    console.log(
    'Email: ' + textEmail,
    'Password: ' + textPass,
    );
    e.preventDefault();
    btnSetDisabled();
    btnRemoveStyle();
    submitMessageRemove();
    submitMessageAdd();
    setTimeout(reset(), 1000);
}

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      
        <form onMouseOver={checkButton}  id="form" className={styles.form} onSubmit={handleSubmit} method='GET'>
            
          <h1 className={styles.title}>
            Login
          </h1>
          
          <div className={styles.input}>
            
            <Input
            id='mail'
            onChange={emailChange}
            onBlur={blurOnEmail}
            onMouseEnter={hideTextMouseEmail}
            onMouseLeave={showTextMouseEmail}
            type='text' 
            placeholder='Email'
            size='26' />
                
            <div id="textEmailInvalid" className={blurEmail} >
              Email должен содержать '@' и '.'!
            </div>
          </div>
              
          <div className={styles.input}>
            
            <Input
            id='pass'
            onChange={passChange}
            onBlur={blurOnPass}
            onMouseEnter={hideTextMousePass}
            onMouseLeave={showTextMousePass}
            type={changeTypePass} 
            placeholder='Password'
            size='26' />
                
            <div id="textPassInvalid" className={blurPass}>
              Должно быть более 7 символов!
            </div>
          </div>
              
          <div className={styles.checkbox}>
            <input 
            id='box'
            onClick={checkboxOn}
            type="checkbox" />
          </div>
              
          <span className={styles.textCheckbox}>
            show password
          </span>

          <div className={styles.button}>
            <div>
              
              <Button 
              id='btn'
              type="submit"
              disabled 
              text = 'sign in'/>

              <div id="textBtnSend" className={styles.textHide}>
                Ваши данные отправлены!
              </div>
            </div>
          </div>         

        </form>
      </div>
    </div>
  );
}

export default Login;


