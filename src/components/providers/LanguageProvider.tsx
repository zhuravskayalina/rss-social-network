// import {
//   createContext,
//   Dispatch,
//   SetStateAction,
//   useMemo,
//   useState,
// } from 'react';
//
// type TypeSetState<T> = Dispatch<SetStateAction<T>>;
//
// interface Context {
//   language: 'english' | 'russian';
//   setType: TypeSetState<string>;
// }
//
// export const LanguageContext = createContext({ language: 'english' });
// export const LanguageProvider = ({}) => {
//   const [language, setType] = useState<string>('english');
//   const contextValue = useMemo(() => ({ language, setType }), [language]);
//   return <LanguageContext.Provider value={contextValue}>
//     {}
//   </LanguageContext.Provider>;
// };
