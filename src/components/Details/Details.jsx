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
    return <div className="text-center text-blue-600/75 text-7xl font-sans font-bold">Yükleniyor...</div>;
  };

  console.log(info);
  return (
    <div className="">
      <div className="w-full h-full bg-gradient-to-r from-blue-300 to-green-700" >
        <div className="grid grid-cols-1 grid-flow-row space-x-6 items-center">
          <div className="w-full">
            <img src={info.image_url} className="w-full h-96" />
            <p className=" text-white font-sans font-bold -mt-40 ml-20 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl"> {info.name} </p>
            <Rating name="read-only" className="ml-20 p-6" size="large" value={info?.rating ?? " "} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-28 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 lg:mt-5 md:mt-15 sm:mt-24 xsm:mt-32">
          <div className="border-2 w-96 h-56 mt-12 ml-14">
            <div>
              <p className="text-3xl grid grid-flow-col grid-cols-1 ml-2"> {info?.display_phone}
                <FaPhoneSquare className="mt-1 ml-14 mr-4 rounded-3xl" size={35} />
              </p>

            </div>

            <div className="grid grid-rows-2 mt-5 divide-y ">

              <div className="ml-2">  <p className="bold font-sans text-lg text-center font-black "> Adres Bilgisi <BsFillPinMapFill size={25} className="mb-4 ml-44" /> </p>
              </div>
              <div className="">  <p className="tracking-widest text-center indent-4 whitespace-pre-line font-medium mt-1 "> {info?.location?.display_address} </p> </div>

            </div>

          </div>

          <div className="mt-8 w-96 h-96 xl:ml-0 lg:ml-0 md:ml-10 sm:ml-20 xsm:ml-20 xl:mb-0 lg:mb-0 md:mb-32 sm:mb-32 xsm:mb-32">
            <div className="grid grid-cols-2">
              <p className="font-serif text-xl font-black ml-5"> Lokasyon Bilgisi  </p>
              <BiCurrentLocation size={25} className="ml-2 " />
            </div>
            <CompaniesLocationMap
              lat={info?.coordinates?.latitude}
              lng={info?.coordinates?.longitude}
            />
          </div>
        </div>

        <div className="">
          <Link to="/">
            <GiReturnArrow size={50} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Details;
