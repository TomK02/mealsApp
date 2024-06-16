import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ID = string;
interface FavoriteState {
  ids: ID[];
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    ids: [],
  } as FavoriteState,
  reducers: {
    addFavorite(state, action: PayloadAction<{ id: ID }>) {
      state.ids.push(action.payload.id);
    },
    removeFavorite(state, action: PayloadAction<{ id: ID }>) {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
