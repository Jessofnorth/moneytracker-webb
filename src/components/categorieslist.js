import React, { useState, useEffect } from "react";
import { Stack, Button, ProgressBar, Card } from "react-bootstrap";
import AddCategoryModal from "./addCategoryModal";
import AddEntryModal from "./addEntryModal";
import ViewEntryModal from "./viewEntryModal";
import GetData from "../services/getdata";


//print list of categories cards and amounts connected to them
function CategoriesList() {
  //set states
  const [Categories, setCategories] = useState([]);
  const [Entries, setEntries] = useState([]);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAddEntry, setShowAddEntry] = useState(false);
  const [showEntry, setShowEntry] = useState(false);
  const [entreisList, setEntriesList] = useState(null);
  const [categoryById, setCategoryById] = useState();

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
  //filter category by category id
  function categoryByCategory(id) {
    return Categories.filter((Categories) => Categories._id === id);
  }
  //set color of progressbar depending on % of maxbudet spent
  function getBarColor(now, maxbudget) {
    const diff = now / maxbudget;
    if (diff < 0.5) return "success";
    if (diff < 0.75) return "warning";
    return "danger";
  }

  function showEntriesList(id) {
    let list = entriesByCategory(id);
    let category = categoryByCategory(id);
    category = category[0];
    setEntriesList(list);
    setCategoryById(category);
    setShowEntry(true);
  }

  const deleteCategory = async (id) => {
    await GetData.deleteCategory(id)
    .then(function (res) {
      //  await response before reload so data will render
      window.location.reload();
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
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
        <Button variant="success" onClick={() => setShowAddEntry(true)}>
          Add Entry
        </Button>
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
            <Card key={category._id}>
              <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                  <div className="me-5">{category.name}</div>
                  <div className="d-flex align-items-baseline">
                    {total} sek
                    <span className="text-muted fs-6 ms-1">
                      / {category.maxbudget} sek
                    </span>
                  </div>
                </Card.Title>
                <ProgressBar
                  className="rounded-pill"
                  variant={getBarColor(total, category.maxbudget)}
                  min={0}
                  max={category.maxbudget}
                  now={total}
                />
                <Stack
                  direction="horizontal"
                  gap="2"
                  className="my-3 justify-content-end"
                >
                  {total === 0 && (
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteCategory(category._id)}
                    >
                      Delete
                    </Button>
                  )}
                  {total !== 0 && (
                    <Button
                      variant="outline-success"
                      onClick={() => showEntriesList(category._id)}
                    >
                      View Entries
                    </Button>
                  )}
                </Stack>
              </Card.Body>
            </Card>
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
      <ViewEntryModal
        show={showEntry}
        handle={() => setShowEntry(false)}
        category={categoryById}
        entries={entreisList}
      />
    </div>
  );
}

export default CategoriesList;
