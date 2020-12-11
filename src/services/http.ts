import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const AttachAuthHeader = async (setIsToken: any) => {
  const { getAccessTokenSilently } = useAuth0();

  try {
    const accessToken = await getAccessTokenSilently();
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    setIsToken(true);
    return;
  } catch (e) {
    console.log(e.message, "error message");
  }
};
