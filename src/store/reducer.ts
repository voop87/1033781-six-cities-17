import { createReducer } from '@reduxjs/toolkit';

import { CITIES } from '../const';
import { changeCity, getCityOffers } from './action';
import { DetailedOffer } from '../types/types';

const initialState = {
  currentCity: CITIES[0],
  cityOffers: [] as DetailedOffer[],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCityOffers, (state, action) => {
      state.cityOffers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    });
});
