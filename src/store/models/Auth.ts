export interface User {
  username: string;
  password: string;
  role: Role;
}

export enum Role {
  ADMIN = 'admin',
}
