type User = {
  id: number;
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
