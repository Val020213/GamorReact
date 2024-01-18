import React from "react";
import LoginModal from "./LoginModal.tsx";

type Props = {
  className?: string;
};

export default function Login({ className = "login-btn" }: Props): JSX.Element {
  const [OpenModal, SetOpenModal] = React.useState(false);

  return (
    <>
      <button
        className={`${className}`}
        onClick={() => SetOpenModal(!OpenModal)}
      >
        Login
      </button>
      <LoginModal OpenModal={OpenModal} SetOpenModal={SetOpenModal} />
    </>
  );
}
