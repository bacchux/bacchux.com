import React from 'react';

import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

import './map.scss';
import mapMarkerImage from './icon.png';

export const baseUrl =
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyA2zk8tWlRqFNQwTuwvV7fvTAApiCocXPk&libraries=places,geometry';

const AsyncGoogleMaps = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={15}
      defaultCenter={{ lat: 48.8760826, lng: 2.3691194 }}
      defaultOptions={{ scrollwheel: false }}
    >
      <Marker icon={mapMarkerImage} position={{ lat: 48.8760826, lng: 2.3691194 }}>
        <InfoWindow>
          <div className="map__schema" itemScope itemType="https://schema.org/ContactPage">
            <p className="map-info">
              <span itemProp="name" className="map-info--name">
                BacchUX
              </span>
              <span itemScope itemProp="address" itemType="https://schema.org/PostalAddress">
                <span className="map-info--street" itemProp="streetAddress">
                  22 rue Vicq d'azir
                </span>
                <span className="map-info--zip" itemProp="postalCode">
                  75010
                </span>
                &nbsp;
                <span className="map-info--locality" itemProp="addressLocality">
                  Paris
                </span>
              </span>
            </p>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  )),
);

export const Map = () => (
  <div className="map">
    <div className="container">
      <div className="col-xs-12">
        <div className="map__container">
          <AsyncGoogleMaps
            googleMapURL={baseUrl}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={
              <div className="map__container--loading">
                <span className="map__container__loading-text">Chargement de la carte en cours...</span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  </div>
);

export default Map;
