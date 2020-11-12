import React from "react";
import { useSelector } from "react-redux";

import "../css/App.css";

function Page2() {
  const formData = useSelector((state) => state.formData);

  const dummyResults = [
    {
      date: "Thur 12 Nov 2020",
      time: "12:00 12:00",
      name: "dummy person1",
      status: "is available",
    },
    {
      date: "Thur 12 Nov 2020",
      time: "12:00 12:00",
      name: "dummy person2",
      status: "is available",
    },
    {
      date: "Thur 12 Nov 2020",
      time: "12:00 12:00",
      name: "dummy person3",
      status: "is available",
    },
    {
      date: "Thur 12 Nov 2020",
      time: "12:00 12:00",
      name: "dummy person4",
      status: "is available",
    },
    {
      date: "Thur 12 Nov 2020",
      time: "12:00 12:00",
      name: "dummy person5",
      status: "is available",
    },
    {
      date: "Thur 12 Nov 2020",
      time: "12:00 12:00",
      name: "dummy person6",
      status: "is available",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        {dummyResults &&
          dummyResults.map((result, index) => (
            <React.Fragment key={"k" + index}>
              {Math.random() > 0.33 && (
                <div
                  key={"r" + index}
                  style={{ border: "1px solid grey", padding: "10px" }}
                  className={"fade-in step-" + index}
                >
                  <span style={{ fontSize: "14px" }}>{result.date}&nbsp;</span>
                  <span style={{ fontSize: "14px" }}>{result.time}</span>
                  <br/>
                  <span style={{ fontSize: "14px" }}>{result.name}&nbsp;</span>
                  <span style={{ fontSize: "14px" }}>{result.status}</span>                 
                </div>
              )}
            </React.Fragment>
          ))}
        <br />
        <button onClick={() => console.table(formData)}>
          Confirm Bookings
        </button>
      </div>
    </div>
  );
}

export default Page2;
