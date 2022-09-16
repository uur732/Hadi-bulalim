import React from "react";
import { useState } from "react";
import Companies from "../Companies/Companies";


function CompaniesList(props) {

  if (props.data.length === 0) {
    return (
      <p className="text-2xl text-center -mt-24 font-sans font-bold">Hadi Bulalım!</p>
    );
  };

  console.log(props.data, "data")
  console.log(props.data2, "data2")
  return (
    <>
      <div className="bg-gradient-to-r from-green-300 to-blue-700 grid grid-cols-2 -mt-24 
      2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1">


        {props.data?.map((companies) => {
          return (
            <div>
              <Companies key={companies.id} companiesData={companies} />
            </div>
          );
        })}

      </div>

    </>
  );
}

export default CompaniesList;
