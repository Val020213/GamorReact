import React, { useEffect, useRef } from "react";
import Message from "./Message.tsx";
import DiscordIcon from "../IconsSvg/Discord.tsx";
import GoogleIcon from "../IconsSvg/Google.tsx";
import TwitchIcon from "../IconsSvg/Twitch.tsx";

export default function RegisterModal({
  OpenModal,
  SetOpenModal,
}): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [message, SetMessage] = React.useState({
    active: false,
    message: "",
    isSuccess: false,
  });

  type Props = {
    name: string;
    password: string;
    confirm_password: string;
  };

  function Register({ name, password, confirm_password }: Props): void {
    if (
      name === "" ||
      password === "" ||
      confirm_password === "" ||
      password !== confirm_password
    ) {
      SetMessage({
        active: true,
        message: "Hey your passwords don't match",
        isSuccess: false,
      });
    } else {
      SetMessage({
        active: true,
        message: "Success",
        isSuccess: true,
      });
      localStorage.setItem(name, password);
      SetOpenModal(false);
    }
    return;
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node) &&
        OpenModal
      ) {
        SetOpenModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [OpenModal, SetOpenModal]);

  return (
    <>
      {message.active && <Message message={message} SetMessage={SetMessage} />}
      {OpenModal && (
        <dialog className='modal-container' open={OpenModal} ref={dialogRef}>
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

              const confirm_password =
                dialogRef.current?.querySelector<HTMLInputElement>(
                  "#confirm_password"
                )?.value;

              if (!name || !password || !confirm_password) {
                return;
              }

              Register({
                name,
                password,
                confirm_password,
              });
            }}
          >
            <h1 className='modal-title'>Register</h1>
            <div className='modal-input-container'>
              <div>
                <label htmlFor='name'>your username</label>
                <input type='text' id='name' placeholder='username' required />
              </div>
              <div>
                <label htmlFor='password'>your password</label>
                <input
                  type='password'
                  id='password'
                  placeholder='password'
                  required
                />
              </div>
              <div>
                <label htmlFor='confirm_password'>confirm your password</label>
                <input
                  type='password'
                  id='confirm_password'
                  placeholder='confirm your password'
                  required
                />
              </div>
            </div>
            <div className='modal-footer'>
              <a className='hlink' href='/'>
                Allready have an account?
              </a>
              <button className='modal-primary-btn' type='submit'>
                Join now!
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
