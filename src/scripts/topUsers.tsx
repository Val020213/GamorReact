import UserItemProps from "../types/UserItemProps";

const getTopUsers: (
  game_id: string
) => NonNullable<Promise<UserItemProps[]>> = async (
  game_id: string
): Promise<UserItemProps[]> => {
  try {
    const clientId = localStorage.getItem("twitch_client_id");
    const accessToken = localStorage.getItem("twitch_access_token");
    if (!clientId || !accessToken) {
      throw new Error("Missing client ID or access token");
    }
    const response = await fetch(
      `https://api.twitch.tv/helix/streams?game_id=${game_id}&first=100`,
      {
        method: "GET",
        headers: {
          "Client-ID": clientId,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return (await response.json()).data.map((user: any) => ({
      name: user.user_name,
      thumbnail: user.thumbnail_url.replace("{width}x{height}", "24x24"),
    })) as UserItemProps[];
  } catch (err) {
    console.log(err);
    return [{ name: "", thumbnail: "" }];
  }
};

export default getTopUsers;
