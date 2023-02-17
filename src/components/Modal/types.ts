export interface ModalProps {
  isActive: boolean;
  setActive: (state: boolean) => void;
  children: React.ReactNode;
}
