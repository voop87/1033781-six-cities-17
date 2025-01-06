import { DetailedOffer } from '../types/types';

export const OFFERS_DATA: DetailedOffer[] = [
  {
    id: '1af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at Paris',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: ['img/apartment-01.jpg'],
    maxAdults: 4,
  },
  {
    id: '2af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio',
    type: 'room',
    price: 160,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: false,
    rating: 5,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: ['img/room.jpg'],
    maxAdults: 4,
  },
  {
    id: '3af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 90,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 13,
    },
    isFavorite: true,
    isPremium: false,
    rating: 5,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: ['img/apartment-03.jpg'],
    maxAdults: 4,
  },
  {
    id: '4af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'house',
    price: 400,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 13,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 5,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: ['img/room.jpg'],
    maxAdults: 6,
  },
];
