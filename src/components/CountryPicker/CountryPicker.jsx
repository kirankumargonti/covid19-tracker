import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../API';

const CountryPicker = ({ handleCountryChange }) => {
  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    const fetchCountriesAPI = async () => {
      setCountryNames(await fetchCountries());
    };
    fetchCountriesAPI();
  }, [setCountryNames]);
  
  return (
    <FormControl className='country-picker'>
      <NativeSelect
        defaultValue=''
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value=''>Global</option>
        {countryNames.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
