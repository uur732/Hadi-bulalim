import React from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { FaPhoneSquare } from 'react-icons/fa';
import { BsFillPinMapFill } from 'react-icons/bs';

function Companies(props) {
    
  const companies = props.companiesData;



  return (
    <>
     <Link to={`Details/${companies.id}`}  >
      <div className="grid grid-cols-2 -ml-20 text-lg companies mt-14 h-min xsm:grid-cols-1 2xsm:grid-cols-1 xsm:place-items-center 2xsm:place-items-center ">
    
        <div className="mt-2 ml-40 font-serif companiesView w-60 h-35 space-y-7 xsm:ml-20 2xsm:ml-20">
          
          <img src={props.companiesData?.image_url} className="transition duration-500 rounded-lg hover:scale-125 hover:rounded-lg max-w-60 max-h-60 xsm:max-w-40 2xsm:max-w-30" />
          
          <p className="font-sans text-xs tracking-tighter "> Resmi büyütmek için fareyi sürükleyebilirsiniz </p>
        
        </div>

        <div className="companiesİnfo m-4 ml-20 place-items-center space-y-10 font-serif">

          <p>{props.companiesData?.name}</p>


          <p className="flex"> {props.companiesData?.location.display_address} <BsFillPinMapFill size={20} className="" />  </p>
          <p className="flex"> {props.companiesData?.phone} <FaPhoneSquare className="mt-1 ml-8 rounded-3xl" size={25} /> </p>
          

          <div className="flex italic companiesRating " >

            <p> {props.companiesData?.rating} </p>
            <p className="ml-2 p-0.5"> Oy </p>
            <Rating name="read-only" className="ml-10" size="large" value={props.companiesData?.rating ?? " "} />
          </div>
    
        </div>
      
      </div>
    </Link>
    </>
  );
}

export default Companies;


