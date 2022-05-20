import React, { useState } from 'react';

import Input from '../../components/form/Input';
import Button from '../../components/form/Button';

import styles from './styles.module.scss';


const Login = () => {

const [textEmail, setTextEmail] = useState('');
const [textPass, setTextPass] = useState('');
const [checkon, setCheckon] = useState();
const [isHoveringEmail, setIsHoveringEmail] = useState(true);
const [isHoveringPass, setIsHoveringPass] = useState(true);
const [blurEmail, setBlurEmail] = useState();
const [blurPass, setBlurPass] = useState();
const [clickBtn, setClickBtn] = useState();
  
const changeTypePass = checkon ? 'text' : 'password';
const checkAll = textPass.length > 7 && textEmail.includes('.') && textEmail.includes('@');
const emailCheck = textEmail.includes('.') && textEmail.includes('@');
const passCheck = textPass.length > 7;
const crossClass = (action, check, value) => action || check || !value ? 'textHide' : 'textInvalid';

const btnStyleActive = () => {
  if(checkAll) {
    return ({backgroundColor: 'green', cursor: 'pointer',});
  }
}

const showMessage = () => clickBtn ? 'textInvalid' : 'textHide';

const handleSubmit = (e) => {
  e.preventDefault();
  if(checkAll) {
    console.log('Email: ' + textEmail, 'Password: ' + textPass,);
    setTextPass('');
    setTextEmail('');
  }
}

const inputDisabled = (blur, check) => {
  if (!blur || check) {
    return false;
  }
  return true;
}

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      
        <form 
        className={styles.form} 
        onSubmit={handleSubmit}
        method='GET'>
            
          <h1 className={styles.title}>Login</h1>
          
          <div className={styles.input}>
            <Input
            id='mail'
            value={textEmail}
            onChange={(e) => setTextEmail(e.target.value)}
            onMouseEnter={() => setIsHoveringEmail(true)} 
            onMouseLeave={() => setIsHoveringEmail(false)}
            onBlur={(e) => setBlurEmail(e.target.value)}
            type='text' 
            placeholder='Email'
            size='26'
            disabled = {inputDisabled(blurPass, passCheck)} 
            />  
            <label 
            htmlFor='mail'
            className={styles[crossClass(isHoveringEmail, emailCheck, textEmail)]}>
              Email должен содержать '@' и '.'!
            </label>
          </div>
              
          <div className={styles.input}>
            <Input
            value={textPass}
            onChange={(e) => setTextPass(e.target.value)}
            onMouseEnter={() => setIsHoveringPass(true)} 
            onMouseLeave={() => setIsHoveringPass(false)}
            onBlur={(e) => setBlurPass(e.target.value)}
            type={changeTypePass} 
            placeholder='Password'
            size='26'
            disabled = {inputDisabled(blurEmail, emailCheck)} />
            <label
            className={styles[crossClass(isHoveringPass, passCheck, textPass)]}>
              Должно быть более 7 символов!
            </label>
          </div>
              
          <div className={styles.checkbox}>
            <input 
            onChange={(e) => setCheckon(e.target.checked)}
            type="checkbox"
            disabled = {inputDisabled(blurEmail, emailCheck)} />
          </div>
          <span className={styles.textCheckbox}>
            show password
          </span>

          <div className={styles.button}>
              <Button 
              onClick={() => setClickBtn(true)} 
              style={btnStyleActive()}
              type='submit'
              text = 'sign in'
              disabled = {inputDisabled(true, checkAll)} 
              />
              <div className={styles[showMessage()]}>Ваши данные отправлены!</div>
          </div>         

        </form>
      </div>
    </div>
  );
}

export default Login;