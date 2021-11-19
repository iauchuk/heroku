import { NewsItem } from "../getNewsResponse/getNewsResponse";
import { UsersInfoInterface } from "../usersInfoInterface/usersInfoInterface";

interface usersReducerInterface {
  usersList: UsersInfoInterface[];
  isUsersLoading?: boolean;
  isUsersChanging?: boolean;
  isUsersAdding?: boolean;
  isUserDeleting?: boolean;
  isFetching?: boolean;
}

interface newsReducerInterface {
  newsList: NewsItem[];
  isNewsLoading?: boolean;
  isFetching?: boolean;
}

interface rolesReducerInterface {
  rolesList: any;
  isRolesLoading?: boolean;
  isFetching?: boolean;
}

interface newsReducerInterface {
  userRolesList: NewsItem[];
  isUserRolesListLoading?: boolean;
  isFetching?: boolean;
}

export interface StoreStateInterface {
  news?: newsReducerInterface;
  users?: any;
  roles?: rolesReducerInterface;
}
