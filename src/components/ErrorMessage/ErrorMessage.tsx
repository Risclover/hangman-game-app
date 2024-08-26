import { PrimaryBtn } from "../PrimaryBtn";
import "./ErrorMessage.css";

type Props = {
  errorMessage: string | undefined;
  handleShowError: () => void;
};

export const ErrorMessage = ({ errorMessage, handleShowError }: Props) => {
  return (
    <div className="error-message-container">
      <div className="error-message-background"></div>
      <div className="error-message">
        {errorMessage}
        <div className="error-message-btn">
          <PrimaryBtn
            value="Confirm"
            onClick={() => {
              handleShowError();
            }}
          />
        </div>
      </div>
    </div>
  );
};
