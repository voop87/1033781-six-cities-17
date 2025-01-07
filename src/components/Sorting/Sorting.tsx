import { useSelector } from 'react-redux';
import { SortingType } from '../../const';
import { State } from '../../types/types';
import { store } from '../../store';
import { changeCurrentSort } from '../../store/action';
import { useEffect, useRef, useState } from 'react';

function Sorting() {
  const currentSort = useSelector((state: State) => state.currentSort);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const sortSpanRef = useRef<HTMLElement>(null);

  //Сохранить лаконичное решение по закрытию меню
  useEffect(() => {
    const hideMenu = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        sortSpanRef.current &&
        !sortSpanRef.current.contains(e.target)
      ) {
        setIsMenuOpened(false);
      }
    };

    document.addEventListener('click', hideMenu);

    return () => {
      document.removeEventListener('click', hideMenu);
    };
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        ref={sortSpanRef}
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsMenuOpened(!isMenuOpened)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isMenuOpened ? 'places__options--opened' : ''
        }`}
      >
        {Object.values(SortingType).map((sortItem) => (
          <li
            key={sortItem}
            className={`places__option ${
              sortItem === currentSort ? 'places__option--active' : ''
            }`}
            tabIndex={0}
            onClick={() => store.dispatch(changeCurrentSort(sortItem))}
          >
            {sortItem}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
