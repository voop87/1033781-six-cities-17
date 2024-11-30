export type PlaceCardType = {
  id: string;
  location:
    | 'Paris'
    | 'Cologne'
    | 'Brussels'
    | 'Amsterdam'
    | 'Hamburg'
    | 'Dusseldorf';
  title: string;
  price: number;
  type: 'Room' | 'Apartment' | 'House' | 'Hotel';
  rating: string;
  isPremium: boolean;
  isFavorite: boolean;
  imgUrl: string;
};
