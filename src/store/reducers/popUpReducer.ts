import { HIDE_POP_UP, popUpAction, popUpState, SHOW_POP_UP } from '../../types/popup';

const initialState: popUpState = {
  show: false,
};

export const popUpReducer = (state = initialState, action: popUpAction): popUpState => {
  switch (action.type) {
    case SHOW_POP_UP:
      return { show: true };
    case HIDE_POP_UP:
      return { show: false };
    default:
      return state;
  }
};
