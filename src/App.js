import { useState } from 'react';
import './App.css';
import CompaniesList from './components/CompaniesList/CompaniesList';
import SearchBar from './components/SearchBar/SearchBar';
import React from 'react';
import Images from './components/Images/Images';

function App() {
  const [companiesData, setCompaniesData] = useState([]);
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  const getCompaniesRequest = async (term, location) => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=best_match&locale=tr_TR`
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MINE_API_KEY}`,
      }
    });
    const responseJson = await response.json();

    if (responseJson.businesses) {
      setCompaniesData(responseJson.businesses);

    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    getCompaniesRequest(term, location);
  };

  /*
    useEffect(() => {
      getMovieRequest(searchValue);
    }, []);
   
    sürekli istek atar. biz sürekli istek atan işlem yapmıyoruz. onSubmit işlemi yapacağız. useEffect'e
    ihtiyacımız yok
  
    */


  return (
    <>
      <div className="">
        <Images />
      </div>
      <div className='-mt-72'>
        <SearchBar term={term} setTerm={setTerm} submit={handleSubmit} location={location} setLocation={setLocation} />
      </div>

      <div>
        <CompaniesList data={companiesData} />
      </div>


    </>
  );
}



export default App;
