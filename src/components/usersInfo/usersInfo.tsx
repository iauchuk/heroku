import React from "react";
import { UserInfoHeader } from "./userInfoHeader/userInfoHeader";
import { UserInfoList } from "./userInfoList/userInfoList";
import Header from "../header/header";

export const UsersInfo = () => {
  return (
    <div>
      <Header />
      <UserInfoHeader />
      <UserInfoList />
    </div>
  );
};
