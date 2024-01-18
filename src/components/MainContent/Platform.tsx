import React from "react";

export default function Platform(): JSX.Element {
  const platforms: string[][] = [
    ["🎉", "Party"],
    ["🏆", "Matchs"],
    ["🎧", "Stream"],
  ];

  const [indexActive, setIndexActive] = React.useState(0);

  function handleClick(index: number) {
    setIndexActive(index);
  }

  return (
    <div className='platform-container'>
      {platforms.map((platform, index) => (
        <PlatformButton
          key={index}
          platformName={platform[1]}
          platformIcon={platform[0]}
          isActive={indexActive === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

type Props = {
  platformName: string;
  platformIcon: string;
  isActive?: boolean;
  onClick?: () => void;
};

function PlatformButton({
  platformName,
  platformIcon,
  isActive,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`platform-button ${isActive ? "active" : ""}`}
    >
      <span className='platform-icon'>{platformIcon}</span>
      <div className='platform-name'>{platformName}</div>
    </button>
  );
}
