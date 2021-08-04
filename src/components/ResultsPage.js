import React, { useEffect, useState } from 'react'
import Paginate from './Paginate'


const ResultsPage = (props) => {

  const { results, info} = props

  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(2);

  useEffect(() => {
  }, [])


  // const indexOfLastResult = currentPage * resultsPerPage;
  // const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  // const currentResult = results.slice(indexOfFirstResult, indexOfLastResult)
  // const totalPagesNum = Math.ceil(results.length / resultsPerPage)

  return (
    <div>
      <div className="search-results">
        <div className="search-result-info">
          <div className="result">
          {results.length > 0 ? results.map(result => (
            <div className="result-details">
              <div className="result-title"><a href={result.displayLink}>{result.title}</a></div>
              <div className="result-display-link">{result.displayLink}</div>
            </div>
          )) : ""}
          </div>
        </div>  
        
    </div>
    <footer >
        <Paginate />
    </footer>
    </div>
  )
}

export default ResultsPage
