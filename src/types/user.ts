export interface IUser {
    avatar: string | undefined;
    _id:string;
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  role?: 'user' | 'admin';
  status?: 'ban' | 'unban';
  createdAt?: Date;
  updatedAt?: Date;
  }