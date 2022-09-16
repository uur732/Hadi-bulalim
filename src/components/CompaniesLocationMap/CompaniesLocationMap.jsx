import React from "react";
import { GoogleMap, Marker, MarkerF } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};


function CompaniesLocationMap({ lat, lng }) {

    return (
        <>
            {
                lat && lng ? (<div className="w-96 h-96 border-1">
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={ {lat,lng,} }
                zoom={15}
                useStaticMap={true}           
                options={options}
            >
              <MarkerF 
              position={{lat,lng,}}
              />
            </GoogleMap>
            </div> ) : null 
}
        </>
    );
}

export default CompaniesLocationMap;
