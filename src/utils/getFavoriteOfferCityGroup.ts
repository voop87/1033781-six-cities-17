import { CityName, Offer } from '../types/types';

type FavoritesOffersGroup = {
  [key in Offer['city']['name']]?: Offer[];
};

export function getFavoriteOfferCityGroup(
  offers: Offer[]
): FavoritesOffersGroup {
  const result: FavoritesOffersGroup = {};

  if (!offers) {
    return result;
  }

  offers.forEach((offer: Offer) => {
    const name: CityName = offer.city.name;

    result[name] = result[name] ?? [];
    result[name]?.push(offer);
  });
  return result;
}
