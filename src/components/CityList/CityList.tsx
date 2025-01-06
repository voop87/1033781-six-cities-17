import { CITIES } from '../../const';
import { CityName } from '../../types/types';

type CityListProps = {
  currentCity: CityName;
  onChangeCurrentCityHandle(city: CityName): void;
};

function CityList({ currentCity, onChangeCurrentCityHandle }: CityListProps) {
  return (
    <ul className="locations__list tabs__list">
      <li className="locations__item">
        <a
          className={`locations__item-link tabs__item ${
            currentCity === CITIES[0] ? 'tabs__item--active' : ''
          }`}
          onClick={() => onChangeCurrentCityHandle(CITIES[0])}
          href="#"
        >
          <span>{CITIES[0]}</span>
        </a>
      </li>
      <li className="locations__item">
        <a
          className={`locations__item-link tabs__item ${
            currentCity === CITIES[1] ? 'tabs__item--active' : ''
          }`}
          onClick={() => onChangeCurrentCityHandle(CITIES[1])}
          href="#"
        >
          <span>{CITIES[1]}</span>
        </a>
      </li>
      <li className="locations__item">
        <a
          className={`locations__item-link tabs__item ${
            currentCity === CITIES[2] ? 'tabs__item--active' : ''
          }`}
          onClick={() => onChangeCurrentCityHandle(CITIES[2])}
          href="#"
        >
          <span>{CITIES[2]}</span>
        </a>
      </li>
      <li className="locations__item">
        <a
          className={`locations__item-link tabs__item ${
            currentCity === CITIES[3] ? 'tabs__item--active' : ''
          }`}
          onClick={() => onChangeCurrentCityHandle(CITIES[3])}
          href="#"
        >
          <span>{CITIES[3]}</span>
        </a>
      </li>
      <li className="locations__item">
        <a
          className={`locations__item-link tabs__item ${
            currentCity === CITIES[4] ? 'tabs__item--active' : ''
          }`}
          onClick={() => onChangeCurrentCityHandle(CITIES[4])}
          href="#"
        >
          <span>{CITIES[4]}</span>
        </a>
      </li>
      <li className="locations__item">
        <a
          className={`locations__item-link tabs__item ${
            currentCity === CITIES[5] ? 'tabs__item--active' : ''
          }`}
          onClick={() => onChangeCurrentCityHandle(CITIES[5])}
          href="#"
        >
          <span>{CITIES[5]}</span>
        </a>
      </li>
    </ul>
  );
}

export default CityList;
