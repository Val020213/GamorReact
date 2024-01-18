import React from "react";
import GamesItemsProps from "../../types/GameItemProps";

type Props = GamesItemsProps & {
  onClick: (item: { title: string; image: string; id: string }) => void;
};

export default function GameItem({ title, image, id, onClick }: Props) {
  return (
    <li className='game-item' onClick={() => onClick({ title, image, id })}>
      <img className='game-item-image' src={image} alt='game' />
      <p className='game-item-title'>{title.toUpperCase()}</p>
    </li>
  );
}
