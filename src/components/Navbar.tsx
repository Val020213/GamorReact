import React from "react";
import MenuLinks from "./NavBar/MenuLinks.tsx";
import Logo from "./NavBar/Logo.tsx";
import UserSection from "./NavBar/UserSection.tsx";

export default function Navbar(): JSX.Element {
  return (
    <nav className='flex-col px-4 py-6'>
      <div className='navbar-container'>
        <MenuLinks />
        <UserSection />
      </div>
      <Logo />
    </nav>
  );
}
