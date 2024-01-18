import React from "react";
import RegisterModal from "./RegisterModal.tsx";

export default function Register({
  className = "register-btn",
}: Props): JSX.Element {
  const [OpenModal, SetOpenModal] = React.useState(false);

  return (
    <>
      <button
        className={`${className}`}
        onClick={() => SetOpenModal(!OpenModal)}
      >
        Create account
      </button>
      {<RegisterModal OpenModal={OpenModal} SetOpenModal={SetOpenModal} />}
    </>
  );
}

type Props = {
  className?: string;
};
