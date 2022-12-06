import { VapingRooms } from "@mui/icons-material";
import React, { useState } from "react";

const Cards = () => {
  const [value, setValue] = useState("");

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  //   const random = Math.floor(Math.random() * months.length);
  var rand = months[(Math.random() * months.length) | 0];

  const handleClick = () => {
    setValue(rand);
  };

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

      <button className="btn btn-primary mt-5" width={30} onClick={handleClick}>
        Please Select
      </button>

      {value ? (
        <div className="mt-5 w-50 m-auto">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">{value}</h5>
              <p className="card-title">Congrate</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
  /* var myArray = ['January', 'February', 'March']; 
var rand = myArray[(Math.random() * myArray.length) | 0]
console.log(rand) */

  /* var item = ['A', 'B', 'C', 'D'].find((_, i, ar) => Math.random() < 1 / (ar.length - i));
console.log(item); */
};

export default Cards;
