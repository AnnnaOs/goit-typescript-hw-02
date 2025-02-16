import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className={css.errorMessage}>{message}</p>;
};

export default ErrorMessage;
