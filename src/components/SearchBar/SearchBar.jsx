import React from "react";
import { FaSearchLocation } from 'react-icons/fa';

function SearchBar(props) {
 


  return (
    <>
      <form onSubmit={props.submit}>
      <div className=" h-96 flex flex-row justify-center items-center">
      
        
        <div className="grid grid-cols-2">
           <input
           className="rounded-full w-64 h-10 border-current text-center italic border-2"
           placeholder="Ne arayalım?" 
           value={props.term}
           onChange={(e) => props.setTerm(e.target.value)  }
           />
           <input
           className="rounded-full w-64 h-10 border-current text-center italic border-2"
           placeholder="Nerede arayalım ?"
           value={props.location}
           onChange={(e) => props.setLocation(e.target.value)}
           />   
        </div>
        <div className="w-64 h-10 border-black	bg-gray-300 rounded-full px-28 justify-center items-center " >
          <button 
          className="w-64 h-10 rounded-full "
          type="submit"
          
          >
          <FaSearchLocation></FaSearchLocation>
          </button>
        </div>
      </div>
      </form>
   

    </>
  );
}

export default SearchBar;
