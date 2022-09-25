import React from "react";
import { FaSearchLocation } from 'react-icons/fa';

function SearchBar(props) {



  return (
    <>
      <form onSubmit={props.submit}>
        <div className="flex flex-row items-center justify-center h-96 ">
          
          <div className="grid grid-cols-2">
            <input
              className="w-64 h-10 italic text-center border-2 border-current rounded-full md:w-52 sm:w-40 xsm:w-24 2xsm:w-16 xsm:mt-14 2xsm:mt-20 "
              placeholder="Ne arayalım?"
              value={props.term}
              onChange={(e) => props.setTerm(e.target.value)}
            />
            <input
              className="w-64 h-10 italic text-center border-2 border-current rounded-full md:w-52 sm:w-40 xsm:w-24 2xsm:w-16 xsm:mt-14 2xsm:mt-20 "
              placeholder="Nerede arayalım ?"
              value={props.location}
              onChange={(e) => props.setLocation(e.target.value)}
            />
          </div>
          <div className="rounded-full " >
            <button
              className="grid w-64 h-10 rounded-full bg-slate-500 place-items-center md:w-52 sm:w-40 xsm:w-24 2xsm:w-16 xsm:mt-14 2xsm:mt-20 "
              type="submit"
            >
              <FaSearchLocation size={25} className="" ></FaSearchLocation>
            </button>
          </div>
        </div>
      </form>


    </>
  );
}

export default SearchBar;
