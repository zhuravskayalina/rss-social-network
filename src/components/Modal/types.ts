export interface ModalProps {
  isActive: boolean;
  setActive: (state: boolean) => void;
  className?: string;
  children: React.ReactNode;
}
