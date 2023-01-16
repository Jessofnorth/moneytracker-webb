import React, { useState, useEffect } from "react";
import { Stack, Button } from "react-bootstrap";
import Card from "./categorycard";
import AddCategoryModal from "./addCategoryModal";
import GetData from "../services/getdata";

function CategoriesList() {
  const [Categories, setCategories] = useState([]);
  const [Entries, setEntries] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      await GetData.getAllCategories()
        .then(function (res) {
          // handle success
          setCategories(res.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    fetch();
  }, []);
  useEffect(() => {
    const fetch = async () => {
      await GetData.getAllEntries()
        .then(function (res) {
          // handle success
          setEntries(res.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    fetch();
  }, []);

  function entriesByCategory(id) {
    return Entries.filter((Entries) => Entries.category === id);
  }
  console.log(Entries, Categories);
  //RETURN
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
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start",
          margin: "0 auto",
        }}
      >
        {Categories.map((category) => {
          const total = entriesByCategory(category._id).reduce(
            (amount, entry) => amount + entry.amount,
            0
          );
          return (
            <Card
              key={category._id}
              name={category.name}
              maxbudget={category.maxbudget}
              total={total}
            />
          );
        })}
      </div>
      <AddCategoryModal />
    </div>
  );
}

export default CategoriesList;
