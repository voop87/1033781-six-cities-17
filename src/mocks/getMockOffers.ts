import { CityName, DetailedOffer } from '../types/types';

export function getMockOffers(offers: DetailedOffer[], city: CityName) {
  return offers.filter((offer) => offer.city.name === city);
}
