import { createAction } from '@reduxjs/toolkit';
import { CityName, DetailedOffer } from '../types/types';
import { SortingType } from '../const';

export const changeCity = createAction<CityName>('changeCity');
export const getCityOffers = createAction<DetailedOffer[]>('getCityOffers');
export const changeCurrentSort = createAction<SortingType>('changeCurrentSort');
