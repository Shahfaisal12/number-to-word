import React from "react";

const Propability = () => {
  const set = { 1: 0.4, 2: 0.3, 3: 0.2, 4: 0.1 };

  // get probabilities sum:
  var sum = 0;
  for (let j in set) {
    sum += set[j];
  }

  // choose random integers:
  console.log(pick_random());

  function pick_random() {
    var pick = Math.random() * sum;
    for (let j in set) {
      pick -= set[j];
      if (pick <= 0) {
        return j;
      }
    }
  }
};

export default Propability;
