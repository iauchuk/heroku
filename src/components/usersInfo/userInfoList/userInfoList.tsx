import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import * as _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateInterface } from "../../../interfaces/storeStateInterface/storeStateInterface";
import { EditBlock } from "../../editBlock/editBlock";
import { UserInfoFormDialog } from "../userInfoFormDialog/userInfoFormDialog";
import { UsersInfoInterface } from "../../../interfaces/usersInfoInterface/usersInfoInterface";
import { userInfoInitial } from "../../../constants/appConsts";
import {
  changeUsersInfo,
  deleteUserInfo,
  getUsersInfo,
} from "../../../store/userInfo/userInfo.actions";
import { userInfoListLabels } from "./userInfoList.labels";
import Typography from "../../typography/typography";
import { getRoles } from "../../../store/roles/roles.actions";
import styledUserInfoList from "./userInfoList.styles";
import MultiGridConfig from "../userInfoHeader/multiGrid/multiGrid.config";

export const UserInfoList = () => {
  const dispatch = useDispatch();
  const [statusDialog, setStatusDialog] = useState(false);
  const [editableUser, setEditableUser] = useState(userInfoInitial);
  const [dialogTitle, setDialogTitle] = useState("");
  const userInfoListStyled = styledUserInfoList();

  useEffect(() => {
    getUsersInfo()(dispatch);
  }, [dispatch]);
  const userInfoList = useSelector(
    (state: StoreStateInterface) => state?.users?.usersList
  );

  const isExistUserInfoList = _.size(userInfoList) > 0;

  const handleEdit = (formValues: UsersInfoInterface) => {
    changeUsersInfo(formValues)(dispatch);
    getUsersInfo()(dispatch);
  };

  const handleClose = (flag: boolean) => {
    setStatusDialog(flag);
  };

  const editUserItem = (id: string) => {
    setEditableUser(_.find(userInfoList, { id: id }) as UsersInfoInterface);
    setStatusDialog(true);
    setDialogTitle(userInfoListLabels.dialogStatusEdit);
    getRoles()(dispatch);
  };

  const rolesList = useSelector(
    (state: StoreStateInterface) => state?.roles?.rolesList
  );

  const deleteUserItem = (id: string): void => {
    deleteUserInfo(id)(dispatch);
    getUsersInfo()(dispatch);
  };

  return (
    <div>
      {isExistUserInfoList ? (
        <div>
          <List>
            {_.map(
              userInfoList,
              (userInfoItem: UsersInfoInterface, index: number) => (
                <ListItem
                  key={index}
                  className={userInfoListStyled.userInfoElement}
                >
                  {userInfoItem.name || userInfoItem.surname ? (
                    <ListItemText
                      className={userInfoListStyled.userInfoContentWrapper}
                    >
                      <Typography text={userInfoListLabels.fullName} />
                      {userInfoItem.name} {userInfoItem.surname}
                    </ListItemText>
                  ) : (
                    ""
                  )}

                  {userInfoItem.role ? (
                    <ListItemText
                      className={userInfoListStyled.userInfoContentWrapper}
                    >
                      <Typography text={userInfoListLabels.role} />
                      {userInfoItem.role}
                    </ListItemText>
                  ) : (
                    ""
                  )}
                  <EditBlock
                    primaryEvent={() => {
                      editUserItem(userInfoItem.id);
                    }}
                    secondaryEvent={() => {
                      deleteUserItem(userInfoItem.id);
                    }}
                  />
                </ListItem>
              )
            )}
          </List>
        </div>
      ) : (
        <Typography text={userInfoListLabels.emptyList} />
      )}
      {!!editableUser ? (
        <UserInfoFormDialog
          isOpen={statusDialog}
          onSubmit={handleEdit}
          onClose={handleClose}
          initValue={editableUser}
          options={rolesList}
          dialogTitle={dialogTitle}
        />
      ) : (
        ""
      )}
    </div>
  );
};
