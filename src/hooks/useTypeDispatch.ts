import { useDispatch } from 'react-redux';
import { AppDispatch } from 'types/Store';

export const useTypeDispatch = () => useDispatch<AppDispatch>();
