import { SortingType } from '../const';
import { DetailedOffer } from '../types/types';

const sortBy = {
  [SortingType.Popular]: (offers: DetailedOffer[]) => [...offers],
  [SortingType.PriceLow]: (offers: DetailedOffer[]) =>
    [...offers].sort((left, right) => left.price - right.price),
  [SortingType.PriceHigh]: (offers: DetailedOffer[]) =>
    [...offers].sort((left, right) => right.price - left.price),
  [SortingType.Rating]: (offers: DetailedOffer[]) =>
    [...offers].sort((left, right) => right.rating - left.rating),
};

export const sortOffers = (offers: DetailedOffer[], sortType: SortingType) =>
  sortBy[sortType](offers);
