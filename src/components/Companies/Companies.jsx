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
      <div className="companies mt-14 -ml-20 h-min text-lg grid grid-cols-2
      2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1
      2xl:-ml-20  xl:-ml-20 lg:-ml-20 md:-ml-20  sm:ml-0 xsm:ml-0
      ">
    
        <div className="companiesView w-60 h-35 mt-2 ml-40 space-y-7 font-serif ">
          
          <img src={props.companiesData?.image_url} className="rounded-lg  transition duration-500 hover:scale-125 hover:rounded-lg max-w-60 max-h-60 " />
          
          <p className="text-xs font-sans tracking-tighter "> Resmi büyütmek için fareyi sürükleyebilirsiniz </p>
        
        </div>

        <div className="companiesİnfo m-4 ml-20 place-items-center space-y-10 font-serif	">

          <p>{props.companiesData?.name}</p>


          <p className="flex"> {props.companiesData?.location.display_address} <BsFillPinMapFill size={20} className="" />  </p>
          <p className="flex"> {props.companiesData?.phone} <FaPhoneSquare className="mt-1 ml-8 rounded-3xl" size={25} /> </p>
          

          <div className="companiesRating flex italic	" >

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


