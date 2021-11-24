import { Auth } from "../model/props";
import instance from "./instance";

export const signup = (user: Auth) => {
  const url = "api/signup";
  return instance.post(url, user);
};
export const signin = (user:Auth) => {
  const url = "api/signin";
  return instance.post(url, user);
};
