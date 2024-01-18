import GamesItemsProps from "../types/GameItemProps";
const getTopGames: () => Promise<GamesItemsProps[]> = async (): Promise<
  GamesItemsProps[]
> => {
  try {
    const clientId = localStorage.getItem("twitch_client_id");
    const accessToken = localStorage.getItem("twitch_access_token");

    if (!clientId || !accessToken) {
      throw new Error("Missing client ID or access token");
    }

    const response = await fetch(
      `https://api.twitch.tv/helix/games/top?first=100`,
      {
        method: "GET",
        headers: {
          "Client-ID": clientId,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return (await response.json()).data.map(
      (game: {
        name: string;
        box_art_url: string;
        id: string;
      }): GamesItemsProps => ({
        title: game.name,
        image: game.box_art_url.replace("{width}x{height}", "24x24"),
        id: game.id,
      })
    ) as GamesItemsProps[];
  } catch (err) {
    console.log(err);
    return [{ title: "", image: "", id: "" }];
  }
};

export default getTopGames;
