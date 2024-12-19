import { Offer } from '../../types/types';
import FavoritePlaceCard from '../FavoritePlaceCard/FavoritePlaceCard';

type FavoritesCityGroupProps = {
  offers: Offer[];
  city: string;
};

function FavoritesCityGroup({ offers, city }: FavoritesCityGroupProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <FavoritePlaceCard key={offer.id} offer={offer} />
        ))}
      </div>
    </li>
  );
}

export default FavoritesCityGroup;
