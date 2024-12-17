import { FavoriteOffer } from '../../types/types';
import { getFavoriteOfferCityGroup } from '../../utils/getFavoriteOfferCityGroup';
import FavoritesCityGroup from '../FavoritesCityGroup/FavoritesCityGroup';

type FavotitesListProps = {
  favoritesList: FavoriteOffer[];
};

function FavoritesList({ favoritesList }: FavotitesListProps) {
  const favoriteOfferCityGroup = getFavoriteOfferCityGroup(favoritesList);

  return (
    <ul className="favorites__list">
      {Object.entries(favoriteOfferCityGroup).map(([city, offers]) => (
        <FavoritesCityGroup key={city} offers={offers} city={city} />
      ))}
    </ul>
  );
}

export default FavoritesList;
