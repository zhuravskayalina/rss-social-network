import { useState } from 'react';
import Modal from '../Modal/Modal';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Questionnaire from './Questionnaire/Questionnaire';
import { AuthorizationProps } from './types';

const Authorization = ({
  isAuthModalActive,
  setAuthModalActive,
  setUser,
  setLoggedIn,
}: AuthorizationProps) => {
  const [isSignIn, setSignIn] = useState(true);
  const [isSignUp, setSignUp] = useState(false);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const setLoginAndPassword = (loginValue: string, passValue: string) => {
    setLogin(loginValue);
    setPassword(passValue);
  };

  const resetForms = () => {
    setSignUp(false);
    setSignIn(true);
  };

  return isSignIn ? (
    <Modal isActive={isAuthModalActive} setActive={setAuthModalActive} className='auth'>
      <SignIn
        setUser={setUser}
        setActive={setAuthModalActive}
        setLoggedIn={setLoggedIn}
        setSignUp={setSignUp}
        setSignIn={setSignIn}
      />
    </Modal>
  ) : isSignUp ? (
    <Modal isActive={isAuthModalActive} setActive={setAuthModalActive} className='auth'>
      <SignUp
        setLoginAndPassword={setLoginAndPassword}
        setSignUp={setSignUp}
        resetForms={resetForms}
      />
    </Modal>
  ) : (
    <Modal isActive={isAuthModalActive} setActive={setAuthModalActive} className='questions'>
      <Questionnaire
        login={login}
        password={password}
        setLogin={setLogin}
        setPassword={setPassword}
        resetForms={resetForms}
        setUser={setUser}
      />
    </Modal>
  );
};

export default Authorization;
