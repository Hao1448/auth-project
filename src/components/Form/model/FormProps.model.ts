export interface FormProps {
  title: string;
  onSubmit: (email: string, password: string) => void;
}
