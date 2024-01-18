import React from "react";
import ExitIcon from "../IconsSvg/Exit.tsx";

export default function Message({ message, SetMessage }: Props): JSX.Element {
  const imgRef = require(
    message.isSuccess ? "../../assets/success.gif" : "../../assets/error.gif"
  );
  const border = message.isSuccess ? "#00FF00" : "#FF0000";

  const dialogRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      SetMessage({
        active: false,
        message: "",
        isSuccess: false,
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [SetMessage]);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (message.active) {
        SetMessage({
          active: false,
          message: "",
          isSuccess: false,
        });
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [message, SetMessage]);

  return (
    <dialog
      className={`message-container border ${border}`}
      style={{ border: "4px solid", borderColor: border }}
      ref={dialogRef}
    >
      <ExitIcon />
      <img src={imgRef} alt='State Animation' />
      <p style={{ color: message.isSuccess ? "#00FF00" : "#FF0000" }}>
        {message.message}
      </p>
    </dialog>
  );
}

type message_props = {
  active: boolean;
  message: string;
  isSuccess: boolean;
};

type Props = {
  message: message_props;
  SetMessage: React.Dispatch<React.SetStateAction<message_props>>;
};
