export type CityName =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferType = 'room' | 'apartment' | 'house' | 'hotel';

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type City = {
  name: CityName;
  location: Location;
};

export type DetailedOffer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  host: Host;
  images: [string];
  maxAdults: number;
};

export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type Review = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
};

export type NewReview = {
  comment: string;
  rating: number;
};
