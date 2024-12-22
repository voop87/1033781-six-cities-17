import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import OfferPage from '../../pages/OfferPage/OfferPage';
import Page404 from '../../pages/Page404/Page404';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { DetailedOffer, Offer } from '../../types/types';
import { AppRoute, AuthorizationStatus } from '../../const';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

type AppScreenProps = {
  placeCardList: DetailedOffer[];
  favoritesList: Offer[] | undefined;
};

function App({ placeCardList, favoritesList }: AppScreenProps) {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage placeCardList={placeCardList} />}
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage favoritesList={favoritesList} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
