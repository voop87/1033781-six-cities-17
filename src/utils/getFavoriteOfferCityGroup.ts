import { City, FavoriteOffer } from '../types/types';

type FavoritesOffersGroup = Partial<Record<City['name'], FavoriteOffer[]>>;

export function getFavoriteOfferCityGroup(
  offers: FavoriteOffer[]
): FavoritesOffersGroup {
  const result: FavoritesOffersGroup = {};

  if (!offers) {
    return result;
  }

  offers.forEach((offer) => {
    const name: City['name'] = offer.city.name;

    if (result[name]) {
      result[name].push(offer);
    } else {
      result[name] = [offer];
    }
  });
  return result;
}
