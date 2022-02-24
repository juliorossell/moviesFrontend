import { IRole } from "./role";


export interface IUserInfo {
  _id: string;
  email: string;
  password: string;
  roles: IRole[],
  createdAt?: Date;
  updatedAt?: Date;
}


