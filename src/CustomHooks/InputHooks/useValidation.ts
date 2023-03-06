import { useEffect, useState } from 'react';
import { Validation } from './types';

const useValidation = (value: string, validations: Validation) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [isInputValid, setInputValid] = useState(false);
  const [isEmailError, setEmailError] = useState(false);

  const emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    const keys = Object.keys(validations);
    keys.forEach((key) => {
      switch (key) {
        case 'minLength':
          // @ts-ignore
          if (value.length < validations[key]) {
            setMinLengthError(true);
          } else {
            setMinLengthError(false);
          }
          break;
        case 'isEmpty':
          if (value.trim().length) {
            setEmpty(false);
          } else {
            setEmpty(true);
          }
          break;
        case 'isEmail':
          if (emailReg.test(String(value).toLowerCase())) {
            setEmailError(false);
          } else {
            setEmailError(true);
          }
          break;
      }
    });
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError]);

  return {
    isEmpty,
    minLengthError,
    isEmailError,
    isInputValid,
  };
};

export default useValidation;
