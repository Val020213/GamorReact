import React from "react";
import Register from "./Register.tsx";
import Login from "./Login.tsx";
import SwitchTheme from "./SwitchTheme.tsx";

export default function UserSection(): JSX.Element {
  const [isLoged, SetLoged] = React.useState<boolean>(() => {
    const storedLoged = localStorage.getItem("isLoged");
    return storedLoged ? true : false;
  });

  React.useEffect(() => {
    if (isLoged) {
      localStorage.setItem("isLoged", "true");
    } else {
      localStorage.removeItem("isLoged");
    }
  }, [isLoged]);

  return (
    <section className='userSection-container'>
      <>
        <SwitchTheme />
        {isLoged ? (
          <>
            Welcome back, {localStorage.getItem("loged") || ""}
            <button className='logout-btn' onClick={() => SetLoged(false)}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Login />
            <Register />
          </>
        )}
      </>
    </section>
  );
}
