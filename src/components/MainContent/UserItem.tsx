import UserItemProps from "../../types/UserItemProps";
import React from "react";
import AddIcon from "../IconsSvg/Add.tsx";
type Props = UserItemProps & {
  position: number;
  onClick: (item: { name: string; thumbnail: string }) => void;
};

function UserItem({ position, name, thumbnail, onClick }: Props) {
  return (
    <li
      className='user-item'
      onClick={() => {
        onClick({ name, thumbnail });
      }}
    >
      <div>
        <span className='user-item-position'>{position}</span>
        <span className='user-item-name'>{name}</span>
      </div>
      <img className='user-item-thumbnail' src={thumbnail} alt={name} />
      <span className='addBtn'> {/*Button*/ }
        <AddIcon />
      </span>
    </li>
  );
}

export default UserItem;
