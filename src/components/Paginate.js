import React, { useState, useEffect } from "react";

const Paginate = () => {
  const pages = 5;

  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  const paginatePrevHandler = () => {
    setCurrentButton((prev) => (prev === 1 ? prev : prev - 1));
  };
  const paginateNextHandler = () => {
    setCurrentButton((next) =>
      next === numberOfPages.length ? next : next + 1
    );
  };
  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);


  return (
    <div className="pagination-container">
      <a href="#!" onClick={paginatePrevHandler}>
        Previous
      </a>
      {numberOfPages.map((page, index) => {
        return (
          <a
            href="#!"
            key={index}
            className={currentButton === page && "active"}
          >
            {page}
          </a>
        );
      })}

      <a href="#!" onClick={paginateNextHandler}>
        Next
      </a>
    </div>
  );
};

export default Paginate;
