import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';
import { OFFERS_DATA } from './mocks/offers';
import { FAVORITES_DATA } from './mocks/favorites';
import { REVIEWS_DATA } from './mocks/reviews';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placeCardList={OFFERS_DATA}
        favoritesList={FAVORITES_DATA}
        reviewsList={REVIEWS_DATA}
      />
    </Provider>
  </React.StrictMode>
);
