"use client"
import React,{ useEffect, useState } from "react";
import {
    CitySelect,
    CountrySelect,
    StateSelect
  } from "react-country-state-city";
  import "react-country-state-city/dist/react-country-state-city.css";
  import "../customStyles.css";

interface SelectProps {
  id: number;
}
  
export function Location() {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);

    return (
      <div className="flex w-full fill-white gap-4">
        <div className="custom-select-wrapper w-full">
        <CountrySelect
          onChange={(e:SelectProps) => {
            setCountryid(e.id);
          }}
          placeHolder="Select Country"
        />
        </div>
        <div className="custom-select-wrapper w-full">
        <StateSelect
          countryid={countryid}
          onChange={(e:SelectProps) => {
            setstateid(e.id);
          }}
          placeHolder="Select State"
        />
        </div>
        <div className="custom-select-wrapper w-full">
        <CitySelect
          countryid={countryid}
          stateid={stateid}
          onChange={(e:SelectProps) => {
            console.log(e);
          }}
          placeHolder="Select City"
        />   
        </div>
      </div>
    );
  }