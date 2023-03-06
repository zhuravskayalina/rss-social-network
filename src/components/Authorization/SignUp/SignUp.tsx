import classNames from 'classnames/bind';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from '../SignIn/sign-in.module.scss';
import useInput from '../../../CustomHooks/InputHooks/useInput';
import FormInput from '../FormInput/FormInput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import AuthButton from '../AuthButton/AuthButton';
import { NetworkClient } from '../../../NetworkClient/NetworkClient';
import { User } from '../../../types/interfaces';
import { SignUpProps } from './types';

const cx = classNames.bind(styles);

const SignUp = ({ setLoginAndPassword, setSignUp, resetForms }: SignUpProps) => {
  const login = useInput('', { isEmpty: true, minLength: 5 });
  const password = useInput('', { isEmpty: true, minLength: 6 });
  const passwordRepeat = useInput('', { isEmpty: true, minLength: 6 });
  const [isPasswordsMatch, setPasswordsMatch] = useState(true);
  const [isInvalidLogin, setInvalidLogin] = useState(false);

  const handlePasswordRepeat = (event: React.ChangeEvent<HTMLInputElement>) => {
    passwordRepeat.onChange(event);

    if (password.value === event.target.value) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    NetworkClient.getUsers().then((users) => {
      const matchUser = users.find((user: User) => user.login === login.value);
      if (matchUser) {
        setInvalidLogin(true);
      } else {
        setInvalidLogin(false);
        setLoginAndPassword(login.value, password.value);
        setSignUp(false);
      }
    });
  };

  return (
    <>
      <h2 className={cx('auth__heading')}>Sign Up</h2>
      <form className={cx('auth__form')} onSubmit={handleSubmit}>
        {login.isDirty && login.isEmpty && <ErrorMessage text='Login cannot be empty' />}
        {login.isDirty && login.minLengthError && (
          <ErrorMessage text='Must be longer than 5 characters' />
        )}
        {isInvalidLogin && <ErrorMessage text='User with this login already exist' />}
        <FormInput
          name='username'
          placeholder='username'
          type='text'
          value={login.value}
          onChange={login.onChange}
          onBlur={login.onBlur}
        />
        {password.isDirty && password.isEmpty && <ErrorMessage text='Password cannot be empty' />}
        {password.isDirty && password.minLengthError && (
          <ErrorMessage text='Must be longer than 6 characters' />
        )}
        <FormInput
          name='password'
          placeholder='password'
          type='password'
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
        />
        {passwordRepeat.isDirty && passwordRepeat.isEmpty && (
          <ErrorMessage text='repeat password' />
        )}
        {!isPasswordsMatch && <ErrorMessage text='Passwords does not match' />}
        <FormInput
          name='repeatPassword'
          placeholder='repeat password'
          type='password'
          value={passwordRepeat.value}
          onChange={handlePasswordRepeat}
          onBlur={passwordRepeat.onBlur}
        />
        <AuthButton
          name='signUp'
          disabled={
            !password.isInputValid ||
            !login.isInputValid ||
            !passwordRepeat.isInputValid ||
            !isPasswordsMatch
          }
          type='submit'
        />
      </form>
      <button className={cx('cancel-btn')} onClick={resetForms}>
        <FormattedMessage id='back' />
      </button>
    </>
  );
};
export default SignUp;
