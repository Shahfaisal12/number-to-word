import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Link from 'next/link'
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const [bdt, setBdt] = useState(undefined);
  const [convertedAmount, setConvertedAmount] = useState("");

  var iWords = [
    "zero",
    " one",
    " two",
    " three",
    " four",
    " five",
    " six",
    " seven",
    " eight",
    " nine",
  ];
  var ePlace = [
    "ten",
    " eleven",
    " twelve",
    " thirteen",
    " fourteen",
    " fifteen",
    " sixteen",
    " seventeen",
    " eighteen",
    " nineteen",
  ];
  var tensPlace = [
    "",
    " ten",
    " twenty",
    " thirty",
    " forty",
    " fifty",
    " sixty",
    " seventy",
    " eighty",
    " ninety",
  ];
  var inWords = [];

  var numReversed, inWords, actnumber, i, j;

  function tensComplication() {
    if (actnumber[i] == 0) {
      inWords[j] = "";
    } else if (actnumber[i] == 1) {
      inWords[j] = ePlace[actnumber[i - 1]];
    } else {
      inWords[j] = tensPlace[actnumber[i]];
    }
  }

  function convertAmount() {
    // var numericValue = document.getElementById('bdt').value;
    var numericValue = bdt;
    numericValue = parseFloat(numericValue).toFixed(2);

    var amount = numericValue.toString().split(".");
    var taka = amount[0];
    var paisa = amount[1];
    // document.getElementById('container').innerHTML = convert(taka) +" taka and "+ convert(paisa)+" paisa only";
    setConvertedAmount(
      convert(taka) + " rupy and " + convert(paisa) + " paisa only"
    );
  }
  function convert(numericValue) {
    inWords = [];
    if (numericValue == "00" || numericValue == "0") {
      return "zero";
    }
    var obStr = numericValue.toString();
    console.log("Obstr ", obStr);
    numReversed = obStr.split("");
    actnumber = numReversed.reverse();

    if (Number(numericValue) == 0) {
      // document.getElementById("container").innerHTML = "BDT Zero";
      setConvertedAmount("BDT Zero");
      return false;
    }

    var iWordsLength = numReversed.length;
    var finalWord = "";
    j = 0;
    for (i = 0; i < iWordsLength; i++) {
      switch (i) {
        case 0:
          if (actnumber[i] == "0" || actnumber[i + 1] == "1") {
            inWords[j] = "";
          } else {
            inWords[j] = iWords[actnumber[i]];
          }
          inWords[j] = inWords[j] + "";
          break;
        case 1:
          tensComplication();
          break;
        case 2:
          if (actnumber[i] == "0") {
            inWords[j] = "";
          } else if (actnumber[i - 1] !== "0" && actnumber[i - 2] !== "0") {
            inWords[j] = iWords[actnumber[i]] + " hundred";
          } else {
            inWords[j] = iWords[actnumber[i]] + " hundred";
          }
          break;
        case 3:
          if (actnumber[i] == "0" || actnumber[i + 1] == "1") {
            inWords[j] = "";
          } else {
            inWords[j] = iWords[actnumber[i]];
          }
          if (actnumber[i + 1] !== "0" || actnumber[i] > "0") {
            inWords[j] = inWords[j] + " thousand";
          }
          break;
        case 4:
          tensComplication();
          break;
        case 5:
          if (actnumber[i] == "0" || actnumber[i + 1] == "1") {
            inWords[j] = "";
          } else {
            inWords[j] = iWords[actnumber[i]];
          }
          if (actnumber[i + 1] !== "0" || actnumber[i] > "0") {
            inWords[j] = inWords[j] + " lakh";
          }
          break;
        case 6:
          tensComplication();
          break;
        case 7:
          if (actnumber[i] == "0" || actnumber[i + 1] == "1") {
            inWords[j] = "";
          } else {
            inWords[j] = iWords[actnumber[i]];
          }
          inWords[j] = inWords[j] + " crore";
          break;
        case 8:
          tensComplication();
          break;
        default:
          break;
      }
      j++;
    }

    inWords.reverse();
    for (i = 0; i < inWords.length; i++) {
      finalWord += inWords[i];
    }
    return finalWord;
  }

  return (
    <>
      <div className="number-conversion d-flex align-items-center vh-100 m-auto">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="value my-5 text-center">
                {convertedAmount ? (
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {convertedAmount}
                      </Typography>
                    </CardContent>
                  </Card>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-md-12">
              <TextField
                name="bdt"
                type="text"
                label="Please Enter Value or number"
                variant="outlined"
                onChange={(e) => setBdt(e.target.value)}
                id="bdt"
                className="w-100"
              />
            </div>
            <div className="col-md-12 d-flex justify-content-center mt-5">
              <Button
                variant="outlined"
                name="sr1"
                onClick={convertAmount}
                className="w-50"
                size="large"
              >
                Covert
              </Button>
            </div>
            <h5 className="mt-5 text-danger">
              Please Open Your console When Click On Below Button
            </h5>
            <div className="col-md-12 d-flex flex-wrap justify-content-between mt-3">
              <Button
                variant="outlined"
                className=""
                size="large"
                // href="/CallBackHell"
                onClick={() => router.push("/CallBackHell")}
              >
                CallBackHell
              </Button>
              <Button
                variant="outlined"
                className=""
                size="large"
                // href="/CallBackHell"
                onClick={() => router.push("/Promises")}
              >
                Promises
              </Button>
              <Button
                variant="outlined"
                className=""
                size="large"
                // href="/CallBackHell"
                onClick={() => router.push("/AsyncAwait")}
              >
                AsyncAwait
              </Button>
            </div>
            <h5 className="mt-5 text-danger">
              Get Random card from Array
            </h5>
            <div className="col-md-12 d-flex flex-wrap justify-content-between mt-3">
            <Button
              variant="outlined"
              className=""
              size="large"
              onClick={() => router.push("/Cards")}
            >
              Random value
            </Button>
            <Button
              variant="outlined"
              className=""
              size="large"
              onClick={() => router.push("/TestCard")}
            >
              Random value2
            </Button>
            <Button
              variant="outlined"
              className=""
              size="large"
              onClick={() => router.push("/TestProp")}
            >
              Propabilty Random value
            </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
