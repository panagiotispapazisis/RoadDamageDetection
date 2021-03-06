import { User } from "firebase";

export interface IUserTemplate {
	id: string;
  email: string | null;
  phone: string | null;
	firstName: string|null;
  lastName: string |null; 
  fullName: string;
  imageUrl: string | null;
}

export interface IUser extends IUserTemplate {
	timezone?: string;
  city: string|null;
  street: string|null;
  district:string|null;
  updatedAt: number;
  createdAt: number;
  fullDate: number;
}



export type IAppUser = IUser & User;

