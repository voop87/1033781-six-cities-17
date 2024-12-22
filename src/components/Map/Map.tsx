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
};

function Map({ city, activeOffer, offers }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
  });

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
  }, [map, offers, activeOffer]);

  return (
    <section
      className="cities__map map"
      style={{ height: '500px' }}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
