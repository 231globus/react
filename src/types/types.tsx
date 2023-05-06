import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type RickAndMorty = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
} | null;

export type User = {
  name: string;
  date: string;
  gender: string;
  coffee: boolean;
  file: FileList;
  agree?: boolean;
  image: string;
};

export type InputProps = {
  label: string;
  register: UseFormRegister<User>;
  required: boolean;
  errors: FieldErrors<User>;
};
