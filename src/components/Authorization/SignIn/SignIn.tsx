import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './sign-in.module.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import FormInput from '../FormInput/FormInput';
import { NetworkClient } from '../../../NetworkClient/NetworkClient';
import { User } from '../../../types/interfaces';
import useInput from '../../../CustomHooks/InputHooks/useInput';
import { SignInProps } from './types';
import AuthButton from '../AuthButton/AuthButton';

const cx = classNames.bind(styles);

const SignIn = ({ setUser, setActive, setLoggedIn, setSignUp, setSignIn }: SignInProps) => {
  const username = useInput('', { isEmpty: true, minLength: 5 });
  const password = useInput('', { isEmpty: true, minLength: 6 });
  const [authError, setAuthError] = useState<boolean>();

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    NetworkClient.getUsers().then((users) => {
      const matchUser = users.find((user: User) => user.login === username.value);
      if (matchUser) {
        if (password.value === matchUser.password) {
          setUser(matchUser);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('loggedUserId', matchUser.id);
          setLoggedIn(true);
          setAuthError(false);
          setActive(false);
          navigate(`profile/${matchUser.id}`);
        } else {
          setAuthError(true);
        }
      } else {
        setAuthError(true);
      }
    });
  };

  const handleSignUpRedirect = () => {
    setSignUp(true);
    setSignIn(false);
  };

  return (
    <>
      <h2 className={cx('auth__heading')}>Sign in</h2>
      <form className={cx('auth__form')} onSubmit={handleSubmit}>
        {username.isDirty && username.isEmpty && <ErrorMessage text='Username cannot be empty' />}
        {username.isDirty && username.minLengthError && (
          <ErrorMessage text='Username should be more than 5 characters' />
        )}
        <FormInput
          name='username'
          placeholder='username'
          type='text'
          value={username.value}
          onChange={username.onChange}
          onBlur={username.onBlur}
        />
        {password.isDirty && password.isEmpty && <ErrorMessage text='Password cannot be empty' />}
        {password.isDirty && password.minLengthError && (
          <ErrorMessage text='Password should be more than 6 characters' />
        )}
        <FormInput
          name='password'
          placeholder='password'
          type='password'
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
        />
        {authError && <ErrorMessage text='Wrong username or password' />}
        <AuthButton
          name='signIn'
          disabled={!username.isInputValid || !password.isInputValid}
          type='submit'
        />
      </form>
      <p>
        <span>
          <FormattedMessage id='doesHaveAccount' />
        </span>
        <button className={cx('auth__signup-btn')} onClick={handleSignUpRedirect}>
          <FormattedMessage id='signUp' />
        </button>
      </p>
    </>
  );
};

export default SignIn;
