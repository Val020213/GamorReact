import React from "react";

export default function MenuLinks() {
  const navigationButtons: string[] = ["Home", "Streams", "Party", "Premium"];
  const [active, setActive] = React.useState<number>(0);

  type Props = {
    href: string;
    isActive?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
  };

  function Button({
    href,
    isActive = false,
    onClick,
    children,
  }: Props): JSX.Element {
    return (
      <a
        onClick={onClick}
        className={`menu-links-btn ${isActive ? "active" : ""}`}
        href={href}
      >
        {children}
      </a>
    );
  }

  return (
    <div>
      {/* <button onClick={() => setOpenMenu(!openMenu)}>
        <Menu />
      </button> */}
      <div className='menu-links-container'>
        {navigationButtons.map((button, index) => (
          <Button
            key={index}
            href={`#${button}`}
            isActive={index === active}
            onClick={() => setActive(index)}
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  );
}
