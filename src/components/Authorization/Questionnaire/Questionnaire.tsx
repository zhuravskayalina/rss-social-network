import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import styles from '../SignIn/sign-in.module.scss';
import FormInput from '../FormInput/FormInput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import useInput from '../../../CustomHooks/InputHooks/useInput';
import AuthButton from '../AuthButton/AuthButton';
import { NetworkClient } from '../../../NetworkClient/NetworkClient';
import UserPhoto from '../../../assets/images/user-avatar.png';
import { QuestionnaireProps } from './types';

const cx = classNames.bind(styles);

const Questionnaire = ({
  login,
  password,
  setLogin,
  setPassword,
  resetForms,
  setUser,
}: QuestionnaireProps) => {
  const name = useInput('', { isEmpty: true });
  const surname = useInput('', { isEmpty: true });
  const location = useInput('', { isEmpty: true });
  const email = useInput('', { isEmail: true, isEmpty: true });
  const instagram = useInput('', { isEmpty: true });
  const twitter = useInput('', { isEmpty: true });
  const linkedIn = useInput('', { isEmpty: true });
  const hobbies = useInput('', { isEmpty: true });
  const music = useInput('', { isEmpty: true });
  const books = useInput('', { isEmpty: true });
  const cinema = useInput('', { isEmpty: true });

  const handleCancelRegistration = () => {
    setLogin('');
    setPassword('');
    resetForms();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newUser = {
      login,
      password,
      profilePhoto: UserPhoto,
      name: name.value,
      surname: surname.value,
      location: location.value,
      socialMedia: {
        instagram: instagram.value,
        twitter: twitter.value,
        linkedIn: linkedIn.value,
      },
      email: email.value,
      info: {
        hobbies: hobbies.value,
        music: music.value,
        cinema: cinema.value,
        books: books.value,
      },
      friends: [],
      posts: [],
      photos: [],
      chat: [],
    };

    NetworkClient.createUser(newUser).then((user) => {
      setUser(user);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedUserId', user.id);
      document.location.reload();
    });

    setLogin('');
    setPassword('');
  };

  const validateFields = () => {
    return (
      name.isInputValid &&
      surname.isInputValid &&
      location.isInputValid &&
      email.isInputValid &&
      instagram.isInputValid &&
      twitter.isInputValid &&
      linkedIn.isInputValid &&
      hobbies.isInputValid &&
      music.isInputValid &&
      books.isInputValid &&
      cinema.isInputValid
    );
  };

  return (
    <div className={cx('questions')}>
      <h2 className={cx('auth__heading')}>
        <FormattedMessage id='Please, answer below' />
      </h2>
      <form className={cx('auth__form')} onSubmit={handleSubmit}>
        {name.isDirty && name.isEmpty && <ErrorMessage text='Enter your name' />}
        <FormInput
          name='name'
          placeholder='your name'
          type='text'
          value={name.value}
          onChange={name.onChange}
          onBlur={name.onBlur}
        />
        {surname.isDirty && surname.isEmpty && <ErrorMessage text='Enter your surname' />}
        <FormInput
          name='surname'
          placeholder='your surname'
          type='text'
          value={surname.value}
          onChange={surname.onChange}
          onBlur={surname.onBlur}
        />
        {location.isDirty && location.isEmpty && <ErrorMessage text='Enter your location' />}
        <FormInput
          name='location'
          placeholder='your location'
          type='text'
          value={location.value}
          onChange={location.onChange}
          onBlur={location.onBlur}
        />
        {email.isDirty && email.isEmpty && <ErrorMessage text='Email cannot be empty' />}
        {email.isDirty && email.isEmailError && <ErrorMessage text='Enter correct email' />}
        <FormInput
          name='email'
          placeholder='your email'
          type='email'
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
        />
        {instagram.isDirty && instagram.isEmpty && <ErrorMessage text='Please, enter something' />}
        <FormInput
          name='instagram'
          placeholder='your instagram'
          type='text'
          value={instagram.value}
          onChange={instagram.onChange}
          onBlur={instagram.onBlur}
        />
        {twitter.isDirty && twitter.isEmpty && <ErrorMessage text='Please, enter something' />}
        <FormInput
          name='twitter'
          placeholder='your twitter'
          type='text'
          value={twitter.value}
          onChange={twitter.onChange}
          onBlur={twitter.onBlur}
        />
        {linkedIn.isDirty && linkedIn.isEmpty && <ErrorMessage text='Please, enter something' />}
        <FormInput
          name='linkedIn'
          placeholder='your linkedIn'
          type='text'
          value={linkedIn.value}
          onChange={linkedIn.onChange}
          onBlur={linkedIn.onBlur}
        />
        {hobbies.isDirty && hobbies.isEmpty && <ErrorMessage text='Please, enter something' />}
        <FormInput
          name='hobbies'
          placeholder='your hobbies'
          type='text'
          value={hobbies.value}
          onChange={hobbies.onChange}
          onBlur={hobbies.onBlur}
        />
        {music.isDirty && music.isEmpty && <ErrorMessage text='Please, enter something' />}
        <FormInput
          name='music'
          placeholder='favourite music'
          type='text'
          value={music.value}
          onChange={music.onChange}
          onBlur={music.onBlur}
        />
        {books.isDirty && books.isEmpty && <ErrorMessage text='Please, enter something' />}
        <FormInput
          name='books'
          placeholder='favourite books'
          type='text'
          value={books.value}
          onChange={books.onChange}
          onBlur={books.onBlur}
        />
        {cinema.isDirty && cinema.isEmpty && <ErrorMessage text='Please, enter something' />}
        <FormInput
          name='cinema'
          placeholder='favourite movies'
          type='text'
          value={cinema.value}
          onChange={cinema.onChange}
          onBlur={cinema.onBlur}
        />
        <AuthButton name='continue' disabled={!validateFields()} type='submit' />
      </form>
      <button className={cx('cancel-btn')} onClick={handleCancelRegistration}>
        <FormattedMessage id='cancel' />
      </button>
    </div>
  );
};

export default Questionnaire;
