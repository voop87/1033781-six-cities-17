import { useState } from 'react';
import { CityName, DetailedOffer } from '../../types/types';
import Header from '../../components/Header/Header';
import PlaceCardList from '../../components/PlaceCardList/PlaceCardList';
import Map from '../../components/Map/Map';
import CityList from '../../components/CityList/CityList';
import { changeCity, getCityOffers } from '../../store/action';
import { store } from '../../store';
import { getMockOffers } from '../../mocks/getMockOffers';
import { OFFERS_DATA } from '../../mocks/offers';

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
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li
                      className="places__option places__option--active"
                      tabIndex={0}
                    >
                      Popular
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: low to high
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: high to low
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Top rated first
                    </li>
                  </ul>
                </form>

                <PlaceCardList
                  onChangeActiveOfferHandle={changeActiveOfferHandle}
                  placeCardList={placeCardList}
                  type="cities"
                />
              </section>
              <div className="cities__right-section">
                <Map
                  activeOffer={activeOffer}
                  offers={placeCardList}
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
