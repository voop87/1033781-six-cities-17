import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { PlaceCardType } from './types/types';

const PLACE_CARD_DATA: PlaceCardType[] = [
  {
    id: '0',
    location: 'Amsterdam',
    isPremium: true,
    imgUrl: 'img/apartment-01.jpg',
    price: 120,
    rating: '80%',
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    isFavorite: false,
  },
  {
    id: '1',
    location: 'Amsterdam',
    isPremium: false,
    imgUrl: 'img/room.jpg',
    price: 80,
    rating: '80%',
    title: 'Wood and stone place',
    type: 'Room',
    isFavorite: true,
  },
  {
    id: '2',
    location: 'Amsterdam',
    isPremium: false,
    imgUrl: 'img/apartment-02.jpg',
    price: 132,
    rating: '80%',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    isFavorite: false,
  },
  {
    id: '3',
    location: 'Amsterdam',
    isPremium: true,
    imgUrl: 'img/apartment-03.jpg',
    price: 180,
    rating: '100%',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isFavorite: false,
  },
  {
    id: '4',
    location: 'Amsterdam',
    isPremium: false,
    imgUrl: 'img/room.jpg',
    price: 80,
    rating: '80%',
    title: 'Wood and stone place',
    type: 'Room',
    isFavorite: true,
  },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeCardList={PLACE_CARD_DATA} />
  </React.StrictMode>
);
