export interface SignUpProps {
  setLoginAndPassword: (loginValue: string, passValue: string) => void;
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  resetForms: () => void;
}
