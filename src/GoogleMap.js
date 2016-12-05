import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import './styles/GoogleMap.scss';

const HereMarker = () => (
  <div className="mapMarker" title="You are here" />
);


export default class SimpleMap extends Component {
  render() {
		const { lat, lng } = this.props;

    return (
       <GoogleMap
				apiKey="AIzaSyCfEzWkT0UOIWvYyV6A2uQsiqJrPJ3H-Xc"
				defaultCenter={[lat, lng]}
        center={[lat, lng]}
        zoom={15}>
			
				<HereMarker lat={lat} lng={lng} />

      </GoogleMap>
    );
  }
}