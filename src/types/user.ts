export interface IUser {
  [x: string]: any;
  avatar: string | undefined;
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  role?: "user" | "admin";
  status?: "ban" | "unban";
  createdAt?: Date;
  updatedAt?: Date;

  profilePicture?: string;
  city?: string;
  address?: string;
  postalCode?: string;
  country?: string;
  gender?: "male" | "female";
  bio?: string;
  facebook?: string;
  website?: string;
}
