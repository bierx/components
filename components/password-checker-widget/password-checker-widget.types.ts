export type IPasswordCheckerWidget = {
  password?: string;
  block?: boolean;
  theme?: 'dark' | 'light';
  trans?: {
    password_check_1: string;
    password_check_2: string;
  };
};
