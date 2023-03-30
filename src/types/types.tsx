type User = {
  id: number;
  name: string;
  birth: string;
  gender: string;
  doesUserLikeCoffe: boolean;
  avatar: string;
};

type Card = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type UserProps = {
  name: string;
  birth: string;
  gender: string;
  doesUserLikeCoffe: boolean;
  avatar: string;
};

type UserListState = {
  users: IForm[];
};

type ErrorMessage = {
  name: string;
  date: string;
  gender: string;
  coffee: string;
  file: string;
  agree: string;
};

interface IForm {
  name: string;
  date: string;
  gender: string;
  coffee: boolean;
  file: string;
  agree: boolean;
}
