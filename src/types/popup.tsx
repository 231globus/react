export const SHOW_POP_UP = 'SHOW_POP_UP';
export const HIDE_POP_UP = 'HIDE_POP_UP';

export type popUpState = {
  show: boolean;
};

export interface popUpAction {
  type: string;
}
