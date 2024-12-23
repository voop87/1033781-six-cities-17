import { DetailedOffer } from '../../types/types';
import PlaceCard from '../PlaceCard/PlaceCard';

type PlaceCardListProps = {
  placeCardList: DetailedOffer[];
  onChangeActiveOfferHandle: (id: string | null) => void;
  type: 'near-places' | 'cities';
};

function PlaceCardList({
  placeCardList,
  onChangeActiveOfferHandle,
  type,
}: PlaceCardListProps) {
  const neighbourhoodOffers = placeCardList.slice(0, 2);
  return (
    <div
      className={
        type === 'cities'
          ? 'cities__places-list places__list tabs__content'
          : 'near-places__list places__list'
      }
    >
      {type === 'cities' &&
        placeCardList.map((item) => (
          <PlaceCard
            key={item.id}
            onChangeActiveOfferHandle={onChangeActiveOfferHandle}
            offer={item}
            type={type}
          />
        ))}

      {type === 'near-places' &&
        neighbourhoodOffers.map((item) => (
          <PlaceCard
            key={item.id}
            onChangeActiveOfferHandle={onChangeActiveOfferHandle}
            offer={item}
            type={type}
          />
        ))}
    </div>
  );
}

export default PlaceCardList;
