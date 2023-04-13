import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'types/Store';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
