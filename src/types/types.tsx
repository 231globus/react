type User = {
  id: string;
  name: string;
  birth: string;
  gender: string;
  doesUserLikeCoffe: boolean;
  avatar: string;
};

type UserProps = {
  name: string;
  birth: string;
  gender: string;
  doesUserLikeCoffe: boolean;
  avatar: string;
};

type FormProps = {
  updateUserList: (user: User) => void;
};

type UserListState = {
  users: User[];
};

type ErrorMessage = {
  name: string;
  date: string;
  gender: string;
  coffee: string;
  file: string;
  agree: string;
};
