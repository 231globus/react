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

type UserListState = {
  users: IForm[];
};

interface IForm {
  name: string;
  date: string;
  gender: string;
  coffee: boolean;
  file: FileList;
  agree: boolean;
}
