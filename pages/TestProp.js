import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";

const TestProp = () => {
  const [value, setValue] = useState("");

  const months = [
    {
      img: "https://via.placeholder.com/600/92c952",
      month: "January",
      gold: "32",
      silver: "22",
      dimond: "3",
    },
    {
      img: "https://via.placeholder.com/600/771796",
      month: "February",
      gold: "32",
      silver: "23",
      dimond: "65",
    },
    {
      img: "https://via.placeholder.com/600/24f355",
      month: "March",
      gold: "54",
      silver: "34",
      dimond: "77",
    },
    {
      img: "https://via.placeholder.com/600/d32776",
      month: "Apr",
      gold: "34",
      silver: "67",
      dimond: "34",
    },
    {
      img: "https://via.placeholder.com/600/f66b97",
      month: "May",
      gold: "87",
      silver: "66",
      dimond: "55",
    },
    {
      img: "https://via.placeholder.com/600/56a8c2",
      month: "Jun",
      gold: "33",
      silver: "44",
      dimond: "33",
    },
    {
      img: "https://via.placeholder.com/600/b0f7cc",
      month: "July",
      gold: "44",
      silver: "454",
      dimond: "23",
    },
    {
      img: "https://via.placeholder.com/600/54176f",
      month: "Aug",
      gold: "23",
      silver: "88",
      dimond: "45",
    },
    {
      img: "https://via.placeholder.com/600/810b14",
      month: "Sep",
      gold: "43",
      silver: "43",
      dimond: "77",
    },
    {
      img: "https://via.placeholder.com/600/1ee8a4",
      month: "Oct",
      gold: "43",
      silver: "34",
      dimond: "34",
    },
    {
      img: "https://via.placeholder.com/600/66b7d2",
      month: "Nov",
      gold: "34",
      silver: "65",
      dimond: "49",
    },
    {
      img: "https://via.placeholder.com/600/197d29",
      month: "Dec",
      gold: "66",
      silver: "43",
      dimond: "45",
    },
  ];

  //Create a array based on probability weight
  var probability = months
    .map((v, i) => Array(v[12]).fill(i))
    .reduce((c, v) => c.concat(v), []);

    // console.log(probability);

  //Random select from probability array
  var rand = probability[Math.floor(Math.random() * probability.length)];

  console.log(months[rand]);
  console.log(months[rand].dimond);
  console.log(rand);

  const handleClick = () => {
    setValue(months[rand]);
  };

  const handleClose = () =>{
    setValue('')
  } 

  return (
    <div className="container py-5">
      <div className="row">
        <h5 className="my-5 text-danger text-center fw-bold">
          Select Random Card from Probability in the list
        </h5>
        {months.map((data, index) => {
          return (
            <div className="col-md-4 mb-3" key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={data.img}
                    alt="green iguana"
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.month}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
        <div className="col-md-12 d-flex justify-content-center">
          <Button
            variant="outlined"
            className="mt-5 fw-bold fs-5"
            size="large"
            onClick={handleClick}
          >
            Please Select
          </Button>
        </div>
      </div>
      {value ? (
        <div className="my-5 w-50 m-auto">
          <Card sx={{ maxWidth: 400, m: "auto" }}>
            <CardActionArea className='position-relative'>
              <CardMedia
                component="img"
                height="140"
                image={value.img}
                alt="green iguana"
              /><button type="button" className="btn-close position-absolute" aria-label="Close" style={{top:'10px', right:'10px'}} onClick={handleClose}></button>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  gutterBottom
                  color="green"
                  sx={{ fontWeight: "bold" }}
                  variant="h5"
                  component="div"
                >
                  Congratulation
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  <span className="text-danger">Token#: </span> {value.month}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  <span className="text-danger">Propbility: </span> {rand+1}
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h5" component="div">
                    <span className="text-danger">Gold:</span> {value.gold}
                  </Typography>
                  <Typography variant="h5" component="div">
                    <span className="text-danger">Silver:</span> {value.silver}
                  </Typography>
                  <Typography variant="h5" component="div">
                    <span className="text-danger"> Dimond:</span> {value.dimond}
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TestProp;
