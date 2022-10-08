export interface UiInputProps {
  type: string;
  placeholder: string;
  className: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
}
