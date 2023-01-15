import React from "react";
import { Card, ProgressBar, Stack, Button } from "react-bootstrap";
function Cards(data) {
  var total = 1600;
  return (
    <Card>
      <Card.Body key={data._id}>
        <Card.Title className="d-flex justify-content-between">
          <div className="me-5">{data.name}</div>
          <div className="d-flex align-items-baseline">
            {total} sek
            <span className="text-muted fs-6 ms-1">/ {data.maxbudget} sek</span>
          </div>
        </Card.Title>
        <ProgressBar
          className="rounded-pill"
          variant={getBarColor(total, data.maxbudget)}
          min={0}
          max={data.maxbudget}
          now={total}
        />
        <Stack
          direction="horizontal"
          gap="2"
          className="my-3 justify-content-end"
        >
          <Button variant="outline-success">Add Entry</Button>
          <Button variant="outline-success">View Entries</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

function getBarColor(total, maxbudget) {
  const diff = total / maxbudget;
  if (diff < 0.5) return "success";
  if (diff < 0.75) return "warning";
  return "danger";
}
export default Cards;
