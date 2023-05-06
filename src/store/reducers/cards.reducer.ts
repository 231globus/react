import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Character, RickAndMorty } from 'types/types';

export type CardsState = {
  cards: RickAndMorty | null;
  card: Character | null;
  filter: string;
  isLoading: boolean;
  isError: unknown;
};

const initialState: CardsState = {
  cards: null,
  card: null,
  filter: '',
  isLoading: false,
  isError: false,
};

export const fetchCards = createAsyncThunk('cards', async (filter: string, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`);
    if (!response.ok) throw new Error('Error');
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const fetchId = createAsyncThunk('id', async (id: number, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!response.ok) throw new Error('Error');
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(fetchCards.rejected, (state, action) => {
        state.isError = action.payload;
      })
      .addCase(fetchId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.card = action.payload;
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(fetchId.rejected, (state, action) => {
        state.isError = action.payload;
      });
  },
});

export default cardsReducer.reducer;
