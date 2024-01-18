import React, { useEffect } from "react";
import FilterIcon from "../IconsSvg/Filter.tsx";
import GamesItemsProps from "../../types/GameItemProps.tsx";
import UserItemProps from "../../types/UserItemProps.tsx";
import getTopGames from "../../scripts/topGames.tsx";
import getTopUsers from "../../scripts/topUsers.tsx";
import GameItem from "./GameItem.tsx";
import UserItem from "./UserItem.tsx";

export default function Ranking(): JSX.Element {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [[gameSelected, id], setGameSelected] = React.useState<
    [string, string]
  >(["SELECT GAME", "0"]);
  const [games, setGames] = React.useState<GamesItemsProps[]>([]);
  const [users, setUsers] = React.useState<UserItemProps[]>([]);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
      const games = await getTopGames();
      if (games) {
        setGames(games);
      } else {
        throw new Error("Error Games not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopUsers(id);
  }, [id]);

  const getUsers = async () => {
    try {
      const users = await getTopUsers(id);
      if (users) {
        setUsers(users);
      } else {
        throw new Error("Error Games not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [heroId, SetHeroId] = React.useState<number>(0);
  const containerHero = document.getElementById("banner-hero");
  const imgTags = containerHero?.getElementsByTagName("img");
  const length: number = imgTags?.length ?? 3;

  function increasePosition() {
    SetHeroId((heroId + 1) % length);
  }

  function miniHero(thumbnail: string) {
    imgTags?.item(heroId)?.setAttribute("src", thumbnail);
    imgTags?.item(heroId)?.setAttribute("style", "display: block");
    increasePosition();
  }

  function handleClickMenu(): JSX.Element {
    getGames();
    setOpenMenu(!openMenu);
    return <>{createGameItemList(games, handleClickGame)}</>;
  }

  function handleClickGame({ title, id }: GamesItemsProps) {
    setGameSelected([title.toUpperCase(), id]);
    setOpenMenu(false);
  }

  function handleClickUser({ thumbnail }: UserItemProps) {
    miniHero(thumbnail);
  }

  function handleClickSearchBtn() {
    getUsers();
  }

  return (
    <div className='ranking-container'>
      <button
        onClick={() => handleClickMenu()}
        className='ranking-container-header'
      >
        {gameSelected}
        <FilterIcon />
      </button>
      <div className='ranking-body'>
        {openMenu && <ul>{createGameItemList(games, handleClickGame)}</ul>}
        {!openMenu && <ol>{createUserItemList(users, handleClickUser)}</ol>}
      </div>
      <button
        className='ranking-search-btn'
        onClick={() => handleClickSearchBtn()}
      >
        Search
      </button>
    </div>
  );
}

function createGameItemList(
  games: GamesItemsProps[],
  onClick: (arg0: GamesItemsProps) => void
): JSX.Element[] {
  return games.map((game) => (
    <GameItem key={game.id} {...game} onClick={onClick} />
  ));
}

function createUserItemList(
  users: UserItemProps[],
  onClick: (arg0: UserItemProps) => void
): JSX.Element[] {
  return users.map((user, index) => (
    <UserItem key={index} {...user} position={index + 1} onClick={onClick} />
  ));
}
