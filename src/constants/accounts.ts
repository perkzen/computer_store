import { Role, User } from '../store/models/Auth';

export const admin: User = {
  username: 'admin',
  password: 'admin',
  role: Role.ADMIN,
};
