import { createReducer } from '@reduxjs/toolkit';

import { CITIES, SortingType } from '../const';
import { changeCity, changeCurrentSort, getCityOffers } from './action';
import { DetailedOffer } from '../types/types';

const initialState = {
  currentCity: CITIES[0],
  cityOffers: [] as DetailedOffer[],
  currentSort: SortingType.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCityOffers, (state, action) => {
      state.cityOffers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeCurrentSort, (state, action) => {
      state.currentSort = action.payload;
    });
});
