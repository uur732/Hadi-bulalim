import React from "react";
import { useEffect } from "react";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { FaPhoneSquare } from 'react-icons/fa';
import { BsFillPinMapFill } from 'react-icons/bs';
import CompaniesLocationMap from "../CompaniesLocationMap/CompaniesLocationMap";
import { BiCurrentLocation } from 'react-icons/bi';
import { GiReturnArrow } from 'react-icons/gi';
import { Link } from "react-router-dom";


function Details() {

  const [loading, setLoading] = useState(true);
  const [info, setİnfo] = useState({});
  const { id } = useParams();

  const getCompaniesRequest = async () => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}?locale=tr_TR`
    const getCompaniesRequest = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MINE_API_KEY}`,
      }
    });

    const info = await getCompaniesRequest.json();
    setİnfo(info);
    setLoading(false);
    console.log(JSON.stringify(info, null, 2));
  };

  useEffect(() => {
    getCompaniesRequest();
  }, []);

  if (loading) {
    return <div className="font-sans text-6xl font-bold text-center text-blue-600/75 sm:text-4xl xsm:text-2xl 2xsm:text-xl">Yükleniyor...</div>;
  };

  console.log(info);
  return (
    <div className="">
      <div className="w-full h-full bg-gradient-to-r from-blue-300 to-green-700" >
        
        <div className="grid grid-flow-row grid-cols-1 space-x-6 ">
          <div className="grid w-full place-items-start">
            <img src={info.image_url} className="w-full h-96" />
            <p className="grid grid-cols-1 ml-10 font-sans text-6xl font-bold text-white -mt-52 md:text-4xl sm:text-2xl xsm:text-xl 2xsm:text-base"> {info.name} 
            <Rating name="read-only" className="mt-8" size="large" value={info?.rating ?? " "} /> </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-28 place-items-center md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 2xsm:grid-cols-1">
          <div className="h-56 mt-12 border-2 w-96 xsm:w-72 2xsm:w-60">
            <div>
              <p className="grid grid-flow-col grid-cols-1 ml-2 text-3xl xsm:text-xl 2xsm:text-base "> {info?.display_phone}
                <FaPhoneSquare className="mt-1 mr-4 rounded-3xl xsm:ml-14 2xsm:ml-14" size={35} />
              </p>

            </div>

            <div className="grid grid-rows-2 mt-5 divide-y ">

              <div className="ml-2">  <p className="font-sans text-lg font-black text-center bold "> Adres Bilgisi <BsFillPinMapFill size={25} className="mb-4 ml-44 xsm:ml-32" /> </p>
              </div>
              <div className="">  <p className="mt-1 font-medium tracking-widest text-center whitespace-pre-line indent-4 "> {info?.location?.display_address} </p> </div>

            </div>

          </div>

          <div className="grid mt-8 w-96 h-96 place-items-center xsm:w-72 2xsm:w-60">
            <div className="grid grid-cols-2 place-items-center">
              <p className="ml-4 font-serif text-xl font-black xsm:text-lg 2xsm:text-base"> Lokasyon Bilgisi  </p>
              <BiCurrentLocation size={25} className="ml-2 " />
            </div>
            <CompaniesLocationMap
              lat={info?.coordinates?.latitude}
              lng={info?.coordinates?.longitude}
            />
          </div>
        </div>

        <div className="mt-32">
          <Link to="/">
            <GiReturnArrow size={50} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Details;
