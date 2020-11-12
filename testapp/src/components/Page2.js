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
      statusColor: "green",
    },
    {
      date: "Thur 12 Nov 2020",
      time: "12:00 12:00",
      name: "Suitable staff Member",
      status: "will be assigned",
      statusColor: "orange",
    },
    {
      date: "Thur 12 Nov 2020",
      time: "12:00 12:00",
      name: "dummy person3",
      status: "is available",
      statusColor: "green",
    },
    {
      date: "Thur 12 Nov 2020",
      time: "12:00 12:00",
      name: "Suitable staff Member",
      status: "will be assigned",
      statusColor: "orange",
    },
    {
      date: "Thur 12 Nov 2020",
      time: "12:00 12:00",
      name: "dummy person5",
      status: "is available",
      statusColor: "green",
    },
    {
      date: "Thur 12 Nov 2020",
      time: "12:00 12:00",
      name: "Suitable staff Member",
      status: "will be assigned",
      statusColor: "orange",
    },
  ];

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  shuffle(dummyResults);

  return (
    <div className="">
      <div className="Header">Accept bookings</div>
      <div className="container">
        <p style={{ fontSize: "18px", color: "#2d88d9", fontWeight: "bold" }}>
          Bookings to be confirmed
        </p>
        {dummyResults &&
          dummyResults.map((result, index) => (
            <React.Fragment key={"k" + index}>
              <div
                key={"r" + index}
                style={{
                  border: "1px solid grey",
                  padding: "20px 15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minWidth: "350px",
                }}
                className={"fade-in step-" + index}
              >
                <img
                  style={{ marginRight: "5px" }}
                  src="https://www.dummyimage.co.uk/50x50/cbcbcb/959595"
                  alt=""
                />
                <div style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "12px", display: "block" }}>
                    {result.date}&nbsp;-&nbsp;{result.time}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      display: "block",
                      minWidth: "220px",
                      color: result.statusColor,
                    }}
                  >
                    {result.name}&nbsp;{result.status}
                  </span>
                </div>
                <div
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  &gt;
                </div>
              </div>
            </React.Fragment>
          ))}
        <br />
        <div className={"fade-in step-" + dummyResults.length}>
          <button onClick={() => console.table(formData)}>
            Confirm Bookings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page2;
