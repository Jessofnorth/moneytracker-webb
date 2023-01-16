import React, { useState } from "react";
import GetData from "../services/getdata";
import { Stack, Button } from "react-bootstrap";
import Card from "./categorycard";

function CategoriesList() {
  //declare state variable for data from axios and error
  const [ListCategories, setCategories] = useState([]);
  const [Error, setError] = useState(false);

  const Data = GetData.getAllCategories()
      .then(function (res) {
        // set the data to the state
        const entry = res.data;
        // setCategories(entry);
      })
      .catch(function (error) {
        // handle error
        setError(true);
      });
  if (Error === true) {
    return <h1>There was an error.</h1>;
  } else {
    return (
      <div className="m-3">
        <Stack
          direction="horizontal"
          gap="5"
          className="my-3 justify-content-center"
        >
          <Button variant="success">Add Entry</Button>
          <Button variant="success">Add Category</Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
            margin: "0 auto",
          }}
        >
          {ListCategories.map((category) => {
            return <Card key={category._id} {...category} />;
          })}
        </div>
      </div>
    );
  }
}

export default CategoriesList;
