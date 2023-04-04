import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type Card = {
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

export type User = {
  name: string;
  date: string;
  gender: string;
  coffee: boolean;
  file: FileList;
  filelink: string;
  agree?: boolean;
};

export type InputProps = {
  label: string;
  register: UseFormRegister<User>;
  required: boolean;
  errors: FieldErrors<User>;
};
