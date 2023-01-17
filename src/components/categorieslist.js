import React, { useState, useEffect } from "react";
import { Stack, Button } from "react-bootstrap";
import Card from "./categorycard";
import AddCategoryModal from "./addCategoryModal";
import AddEntryModal from "./addEntryModal";
import GetData from "../services/getdata";

//print list of categories cards and amounts connected to them 
function CategoriesList() {

  //set states
  const [Categories, setCategories] = useState([]);
  const [Entries, setEntries] = useState([]);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAddEntry, setShowAddEntry] = useState(false);

  //useEffect for HTTPS requests with axios from API
  //fetch categories
  useEffect(() => {
    const fetch = async () => {
      await GetData.getAllCategories()
        .then(function (res) {
          //  set data to state
          setCategories(res.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    fetch();
  }, []);
  //useEffect for HTTPS requests with axios from API
  //fetch entries
  useEffect(() => {
    const fetch = async () => {
      await GetData.getAllEntries()
        .then(function (res) {
          // set data to state
          setEntries(res.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    fetch();
  }, []);

  //filter entries by category id 
  function entriesByCategory(id) {
    return Entries.filter((Entries) => Entries.category_id === id);
  }

  //RETURN
  return (
    <div className="m-3">
      <Stack
        direction="horizontal"
        gap="5"
        className="my-3 justify-content-center"
      >
        {/* buttns for adding category and entry */}
        <Button variant="success" onClick={() => setShowAddEntry(true)}>Add Entry</Button>
        <Button variant="success" onClick={() => setShowAddCategory(true)}>
          Add Category
        </Button>
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
        {/* loop thru categories to print cards with amounts, calculate amount spent so far with entriesVycategory method */}
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
      {/* modals for the forms to add */}
      <AddCategoryModal
        show={showAddCategory}
        handle={() => setShowAddCategory(false)}
      />
       <AddEntryModal
        show={showAddEntry}
        handle={() => setShowAddEntry(false)}
        categories={Categories}
      />
    </div>
  );
}

export default CategoriesList;
