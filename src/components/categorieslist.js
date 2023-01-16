import React from "react";
import { Stack, Button } from "react-bootstrap";
import Card from "./categorycard";
import { MoneyTrackerBudgets } from "../context/context";
import AddCategoryModal from "./addCategoryModal";

function CategoriesList() {
  const { Categories, entriesByCategory } = MoneyTrackerBudgets();
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
      <AddCategoryModal show />
    </div>
  );
}

export default CategoriesList;
