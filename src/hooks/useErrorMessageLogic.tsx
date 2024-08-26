import React, { SetStateAction, useState } from "react";

const useErrorMessageLogic = (
  setPage: (value: number) => void,
  setErrorMessage: React.Dispatch<SetStateAction<string>>
) => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleShowError = () => {
    setShowErrorMessage(false);
    setErrorMessage("");
    setPage(2);
  };

  return { showErrorMessage, setShowErrorMessage, handleShowError };
};

export default useErrorMessageLogic;
