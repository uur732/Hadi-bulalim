import React from "react";
import { GoogleMap, Marker, MarkerF } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};


function CompaniesLocationMap({ lat, lng }) {

    return (
        <>
            {
                lat && lng ? (<div className="w-[400px] h-[400px] xsm:w-72 xsm:h-[350px] 2xsm:w-60 2xsm:h-[300px]  ">
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={ {lat,lng,} }
                zoom={14}
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
