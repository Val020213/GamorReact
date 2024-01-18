const TWITCH_CLIENT_ID = "sfyepfbrdiixtzu1iwdtcdis2ug7hg";
const TWITCH_CLIENT_SECRET = "q73vwyd0xyqy0qq7h7qxl37cjy70iw";

localStorage.setItem("twitch_client_id", TWITCH_CLIENT_ID);
localStorage.setItem("twitch_client_secret", TWITCH_CLIENT_SECRET);

const twitchAuth = async () => {
  try {
    const response = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export default twitchAuth;
