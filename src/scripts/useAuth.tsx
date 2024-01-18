import twitchAuth from "./auth.tsx";
const useTwitchAuth = () => {
  const authWithTwitch = async () => {
    try {
      const response = await twitchAuth();
      if (response?.access_token) {
        localStorage.setItem("twitch_access_token", response.access_token);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { authWithTwitch };
};

export default useTwitchAuth;