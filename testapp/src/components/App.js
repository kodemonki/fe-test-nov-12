import React, { useState, useEffect } from "react";
import axios from "axios";

import Page1 from "./Page1";
import Page2 from "./Page2";

import "../css/App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({ grades: [] });

  const getData = () => {
    axios
      .get("https://run.mocky.io/v3/b2e946da-3ecc-42c5-a7fd-d7f6420f1631")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {data.grades.length !== 0 && (
        <>
          {currentPage === 1 && (
            <Page1 data={data} setCurrentPage={setCurrentPage} />
          )}
          {currentPage === 2 && (
            <Page2 />
          )}
        </>
      )}
    </div>
  );
}

export default App;
