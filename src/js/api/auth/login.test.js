import { save } from "./login.js";
import { LocalStorageMock } from "../../storage/localStorage.mock.js";


const ACCESSTOKEN = "MockAccessToken123";

const mockProfile = {
    name: "mockUsername",
    email: "mockUsername@noroff.no",
    accessToken: ACCESSTOKEN;
};















export async function login(email, password) {
    const response = await fetch(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: headers("application/json"),
    });
  
    if (response.ok) {
      const profile = await response.json();
      save("token", profile.accessToken);
      delete profile.accessToken;
      save("profile", profile);
      return profile;
    }
  
    throw new Error(response.statusText);
  }