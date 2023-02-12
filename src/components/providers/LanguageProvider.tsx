import React, { createContext, Dispatch, FC, SetStateAction, useMemo, useState } from 'react';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

interface Context {
  language: 'english' | 'russian';
  setState: TypeSetState<'english' | 'russian'>;
}

export const LanguageContext = createContext<Context>({
  language: 'english',
  setState: () => {},
});
export const LanguageProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'english' | 'russian'>('english');
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LanguageContext.Provider value={{ language, setState: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
