import React, { useEffect, useState } from "react";
import { key, searchEngineID } from "../API";
import axios from "axios";
import ResultsPage from "./ResultsPage";


const Search = (props) => {
  const goLandingPage = () => {
    props.history.push("/");
  };
  const [state, setState] = useState(
    props.location.state ? props.location.state : ""
  );

  const getResults = (result) => {
    setState(result.target.value)
  }

  const [results, setResults] = useState([]);
  const [info, setInfo] = useState("")
  const searchResults = async (event) => {
    event.preventDefault();
   

  }
  
  useEffect(() => {

    async function getPosts(){
      if(props.location.state){
        try{
          const response = await axios.get(
            `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${searchEngineID}&q=${state}`
            );
            if(response){
              // console.log(response); check data
    
              setResults(response.data.items);
              setInfo(response.data.searchInformation)
            }
        }
        catch (error) {
          console.log(error);
        }
      }
    }
    getPosts();

  }, [])


  return (
    <div className="search">
      <div className="search-form">
        <div className="search-result-logo">
          <img
            src="/images/resultsLogo.png"
            alt="result-logo"
            onClick={goLandingPage}
            
          />
        </div>
        <div className="search-result-input">
          <form onSubmit={searchResults}>
          <input className="result-input" type="text" value={state} onChange={getResults} required />
          <input
            type="submit"
            value="Search"
            className="search-result-button"
          />
          </form>
        </div>
      </div>
      <ResultsPage results={results} info={info} />
    </div>
    
  
  );
};

export default Search;
