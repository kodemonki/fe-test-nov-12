import React from "react";
import { useSelector } from "react-redux";

import "../css/App.css";

function Page2() {
  const formData = useSelector((state) => state.formData);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Page 2</h2>
        <p>{console.log(formData)}</p>
        <button
          onClick={() => console.log('xxx')}
        >
          console.log
        </button>
      </header>
    </div>
  );
}

export default Page2;
