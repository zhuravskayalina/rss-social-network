export interface InputFileProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  src: string | undefined;
  handleDrop: (event: React.DragEvent<HTMLImageElement>) => void;
  handleDragEmpty: (event: React.DragEvent<HTMLImageElement>) => void;
}
