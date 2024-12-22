import { DetailedOffer } from '../../types/types';
import PlaceCard from '../PlaceCard/PlaceCard';

type PlaceCardListProps = {
  placeCardList: DetailedOffer[];
  onChangeActiveOfferHandle: (id: string | null) => void;
};

function PlaceCardList({
  placeCardList,
  onChangeActiveOfferHandle,
}: PlaceCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {placeCardList.map((item) => (
        <PlaceCard
          key={item.id}
          onChangeActiveOfferHandle={onChangeActiveOfferHandle}
          offer={item}
        />
      ))}
    </div>
  );
}

export default PlaceCardList;
