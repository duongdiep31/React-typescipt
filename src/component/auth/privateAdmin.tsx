import React from "react";
import { Navigate } from "react-router-dom";
import {isAuthenticate} from '../../ultis'

type Props = {
  children: React.ReactNode ;
};
const PrivateAdmin = (props: Props) => {
  const user  = isAuthenticate();
  return user.user.id !== 1 ? <Navigate to="/signin" /> : props.children;

};
export default PrivateAdmin;