type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name:
    | 'Paris'
    | 'Cologne'
    | 'Brussels'
    | 'Amsterdam'
    | 'Hamburg'
    | 'Dusseldorf';
  location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: 'room' | 'apartment' | 'house' | 'hotel';
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: [string];
  maxAdults: number;
};

export type FavoriteOffer = {
  id: string;
  title: string;
  type: 'room' | 'apartment' | 'house' | 'hotel';
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};
