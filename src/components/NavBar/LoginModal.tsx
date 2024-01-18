import React, { useEffect, useRef } from "react";
import DiscordIcon from "../IconsSvg/Discord.tsx";
import GoogleIcon from "../IconsSvg/Google.tsx";
import TwitchIcon from "../IconsSvg/Twitch.tsx";

import Message from "./Message.tsx";
type Props = {
  OpenModal: boolean;
  SetOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginModal({
  OpenModal,
  SetOpenModal,
}: Props): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [message, SetMessage] = React.useState({
    message: "",
    active: false,
    isSuccess: false,
  });

  type Props_Login = {
    name: string;
    password: string;
  };

  function Login({ name, password }: Props_Login): void {
    if (
      name === "" ||
      password === "" ||
      localStorage.getItem(name) !== password
    ) {
      SetMessage({
        active: true,
        message: "Hey your password is wrong",
        isSuccess: false,
      });
    } else {
      localStorage.setItem("loged", name);
      localStorage.setItem("isLoged", String(true));
      SetOpenModal(false);
      window.location.reload();
    }
    return;
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node) &&
        OpenModal &&
        !message.active
      ) {
        SetOpenModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [OpenModal, SetOpenModal, message.active]);

  return (
    <>
      {message.active && <Message message={message} SetMessage={SetMessage} />}
      {OpenModal && (
        <dialog open={OpenModal} ref={dialogRef} className='modal-container'>
          <div className='modal-promo'>
            <h1 className='modal-promo-title'>GAMOR</h1>
            <img
              src={require("../../assets/Modal banner.png")}
              alt='Modal Banner'
            />
          </div>
          <form
            className='modal-body'
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const name =
                dialogRef.current?.querySelector<HTMLInputElement>(
                  "#name"
                )?.value;
              const password =
                dialogRef.current?.querySelector<HTMLInputElement>(
                  "#password"
                )?.value;

              if (!name || !password) {
                // this is for testing, name and pass are required
                console.log("no name or password");
                return;
              }

              Login({ name, password });
            }}
          >
            <h1 className='modal-title'>Log in</h1>
            <div className='modal-input-container'>
              <div>
                <label htmlFor='name'>your username</label>
                <input type='text' id='name' placeholder='username' required />
              </div>
              <div className=''>
                <label htmlFor='password'>your password</label>
                <input
                  type='password'
                  id='password'
                  placeholder='password'
                  required
                />
              </div>
            </div>
            <div className='modal-footer'>
              <a className='hlink' href='/'>
                Allready have an account?
              </a>
              <button className='modal-primary-btn' type='submit'>
                Go now!
              </button>
              <div className='modal-social-links'>
                OR
                <a href='/' className='social-link twitch-icon'>
                  <GoogleIcon />
                </a>
                <a href='/' className='social-link google-icon'>
                  <TwitchIcon />
                </a>
                <a href='/' className='social-link discord-icon'>
                  <DiscordIcon />
                </a>
              </div>
            </div>
          </form>
        </dialog>
      )}
    </>
  );
}
