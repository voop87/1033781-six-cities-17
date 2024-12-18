import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';
import { OFFERS_DATA } from './mocks/offers';
import { FAVORITES_DATA } from './mocks/favorites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeCardList={OFFERS_DATA} favoritesList={FAVORITES_DATA} />
  </React.StrictMode>
);
