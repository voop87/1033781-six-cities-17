import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City, DetailedOffer } from '../../types/types';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  city: City;
  activeOffer: DetailedOffer | undefined;
  offers: DetailedOffer[];
  type: 'cities' | 'offer';
};

function Map({ city, activeOffer, offers, type }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
  });
  // Узнать можно ли исключить как-то currentCustomIcon и defaultCustomIcon из зависимостей (варнинг линтера)
  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                offer.id === activeOffer?.id
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer, currentCustomIcon, defaultCustomIcon]);

  return (
    <section
      className={`${type}__map map`}
      style={{ height: '570px' }}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
