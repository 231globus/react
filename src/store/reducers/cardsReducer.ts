import { ActionsEnum, CardsActions, CardsState } from '../../types/Cards';

const initialState: CardsState = {
  cards: null,
  loading: false,
  filter: '',
  error: null,
};

export const CardsReducer = (state = initialState, action: CardsActions): CardsState => {
  switch (action.type) {
    case ActionsEnum.STOP_LOADING:
      return { ...state, loading: false };
    case ActionsEnum.START_LOADING:
      return { ...state, loading: true };
    case ActionsEnum.ADD_ERROR:
      return { ...state, error: action.payload };
    case ActionsEnum.REMOVE_ERROR:
      return { ...state, error: null };
    case ActionsEnum.ADD_FILTER:
      return { ...state, filter: action.payload };
    case ActionsEnum.FETCH_DATA:
      return { ...state, cards: action.payload };
    case ActionsEnum.CLEAR_DATA:
      return { ...state, cards: null };
    default:
      return state;
  }
};
