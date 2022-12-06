
// import React, { useState } from "react";

const TestCards = () => {
//   const [value, setValue] = useState("");

  const months = [
    {
      month: "January",
      gold: "32",
      silver: "22",
      dimond: "3"
    },
    {
      month: "February",
      gold: "32",
      silver: "23",
      dimond: "65"
    },
    {
      month: "March",
      gold: "54",
      silver: "34",
      dimond: "77"
    },
    {
      gold: "34",
      silver: "234",
      dimond: "34"
    },
    {
      gold: "87",
      silver: "66",
      dimond: "55"
    },
    {
      gold: "33",
      silver: "44",
      dimond: "33"
    },
    {
      gold: "44",
      silver: "454",
      dimond: "23"
    },
    {
      gold: "23",
      silver: "88",
      dimond: "45"
    },
    {
      gold: "43",
      silver: "43",
      dimond: "77"
    },
    {
      gold: "43",
      silver: "34",
      dimond: "34"
    },
    {
      gold: "34",
      silver: "65",
      dimond: "49"
    },
    {
      gold: "66",
      silver: "43",
      dimond: "45"
    },
  ];
  
  
  
  /* var rand = months[(Math.random() * months.length) | 0]; */

//   const handleClick = () => {
//     setValue(rand);
//   };

  return (
    <div className="container py-5">
      <div className="row">
        {months.map((data) => {
          return (
            <div className="col-md-4 mb-3" key={data.id}>
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{data}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="btn btn-primary mt-5" width={30}>
        Please Select
      </button>

      <div className="mt-5 w-50 m-auto">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-title">Congrate</p>
        </div>
      </div>
    </div>
    </div>
  );

};

export default TestCards;