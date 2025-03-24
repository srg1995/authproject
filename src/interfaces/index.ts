export interface User {
  email: string;
  password: string;
  token: string;
}

export interface authState {
  user: User;
}

export interface AuthActions {
  register: (email: string, password: string) => Promise<boolean>;
}
