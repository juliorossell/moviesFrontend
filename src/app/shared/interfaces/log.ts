import { IUserInfo } from "./user-info";
export interface ILog {
  _id: string;
  user: IUserInfo;
  token?: string;
  userAgent?: string,
  createdAt?: Date;
  updatedAt?: Date;
  updateDateFormated: string;
}
