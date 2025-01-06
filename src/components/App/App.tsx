import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import OfferPage from '../../pages/OfferPage/OfferPage';
import Page404 from '../../pages/Page404/Page404';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { DetailedOffer, Offer, Review, State } from '../../types/types';
import { AppRoute, AuthorizationStatus, CITIES } from '../../const';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { store } from '../../store';
import { getCityOffers } from '../../store/action';
import { getMockOffers } from '../../mocks/getMockOffers';
import { OFFERS_DATA } from '../../mocks/offers';
import { useSelector } from 'react-redux';

type AppScreenProps = {
  placeCardList: DetailedOffer[];
  favoritesList: Offer[] | undefined;
  reviewsList: Review[];
};

store.dispatch(getCityOffers(getMockOffers(OFFERS_DATA, CITIES[0])));

function App({ placeCardList, favoritesList, reviewsList }: AppScreenProps) {
  const cityOffers = useSelector((state: State) => state.cityOffers);
  const currentCity = useSelector((state: State) => state.currentCity);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage placeCardList={cityOffers} currentCity={currentCity} />
          }
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
        <Route
          path={AppRoute.Offer}
          element={
            <OfferPage
              placeCardList={placeCardList}
              reviewsList={reviewsList}
            />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
