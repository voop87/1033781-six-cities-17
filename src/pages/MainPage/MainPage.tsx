import { useState } from 'react';
import { CityName, DetailedOffer, State } from '../../types/types';
import Header from '../../components/Header/Header';
import PlaceCardList from '../../components/PlaceCardList/PlaceCardList';
import Map from '../../components/Map/Map';
import CityList from '../../components/CityList/CityList';
import { changeCity, getCityOffers } from '../../store/action';
import { store } from '../../store';
import { getMockOffers } from '../../mocks/getMockOffers';
import { OFFERS_DATA } from '../../mocks/offers';
import Sorting from '../../components/Sorting/Sorting';
import { sortOffers } from '../../utils/sortOffers';
import { useSelector } from 'react-redux';

type MainPageProps = {
  placeCardList: DetailedOffer[];
  currentCity: CityName;
};

function MainPage({ placeCardList, currentCity }: MainPageProps) {
  const [activeOffer, setActiveOffer] = useState<DetailedOffer | undefined>(
    undefined
  );
  function changeActiveOfferHandle(id: string | null) {
    const currentPoint = placeCardList.find((point) => point.id === id);
    setActiveOffer(currentPoint);
  }

  function changeCurrentCityHandle(city: CityName) {
    store.dispatch(changeCity(city));
    store.dispatch(getCityOffers(getMockOffers(OFFERS_DATA, city)));
  }

  const currentSort = useSelector((state: State) => state.currentSort);
  const sortedOffers = sortOffers(placeCardList, currentSort);

  //узнать как сделать, чтобы при переключении города изменялось корректно кол-во маркеров на карте
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList
              currentCity={currentCity}
              onChangeCurrentCityHandle={changeCurrentCityHandle}
            />
          </section>
        </div>
        <div className="cities">
          {placeCardList.length && (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {placeCardList.length} places to stay in {currentCity}
                </b>
                <Sorting />

                <PlaceCardList
                  onChangeActiveOfferHandle={changeActiveOfferHandle}
                  placeCardList={sortedOffers}
                  type="cities"
                />
              </section>
              <div className="cities__right-section">
                <Map
                  activeOffer={activeOffer}
                  offers={sortedOffers}
                  city={{
                    name: 'Amsterdam',
                    location: {
                      latitude: 52.3909553943508,
                      longitude: 4.85309666406198,
                      zoom: 11,
                    },
                  }}
                  type="cities"
                />
              </div>
            </div>
          )}

          {placeCardList.length === 0 && (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in{' '}
                    {currentCity}
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
