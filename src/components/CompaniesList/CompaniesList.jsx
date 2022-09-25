import React from "react";
import { useState } from "react";
import Companies from "../Companies/Companies";


function CompaniesList(props) {

  if (props.data.length === 0) {
    return (
      <p className="-mt-24 font-sans text-3xl font-bold text-center xsm:text-lg 2xsm:text-sm">Hadi Bulalım!</p>
    );
  };

  console.log(props.data, "data")
  console.log(props.data2, "data2")
  return (
    <>
      <div className="grid grid-cols-2 -mt-24 bg-gradient-to-r from-green-300 to-blue-700 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 2xsm:grid-cols-1 md:place-items-center sm:place-content-center">


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
