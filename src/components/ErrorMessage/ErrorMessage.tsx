import { useEffect, useRef } from "react";
import { PrimaryBtn } from "../PrimaryBtn";
import "./ErrorMessage.css";
import FocusTrap from "focus-trap-react";

type Props = {
  errorMessage: string | undefined;
  handleShowError: () => void;
};

export const ErrorMessage = ({ errorMessage, handleShowError }: Props) => {
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (errorMessage !== "") {
      errorRef.current?.focus();
    }
  }, [errorMessage]);

  return (
    <FocusTrap>
      <div className="error-message-container">
        <div className="error-message-background"></div>
        <div className="error-message">
          {errorMessage}
          <div className="error-message-btn" tabIndex={-1} ref={errorRef}>
            <PrimaryBtn
              value="Confirm"
              onClick={() => {
                handleShowError();
              }}
            />
          </div>
        </div>
      </div>
    </FocusTrap>
  );
};
