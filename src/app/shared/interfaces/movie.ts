export interface IMovie {
  _id: string;
  name: string;
  category: string;
  imgURL: string,
  createdAt?: Date;
  updatedAt?: Date;
}
