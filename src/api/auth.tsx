import { Auth } from "../model/props";
import instance from "./instance";

export const signup = (user: Auth) => {
  const url = "/register";
  return instance.post(url, user);
};
export const signin = (user:Auth) => {
  const url = "/signin";
  return instance.post(url, user);
};
