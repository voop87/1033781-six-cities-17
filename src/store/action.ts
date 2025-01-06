import { createAction } from '@reduxjs/toolkit';
import { CityName, DetailedOffer } from '../types/types';

export const changeCity = createAction<CityName>('changeCity');
export const getCityOffers = createAction<DetailedOffer[]>('getCityOffers');
