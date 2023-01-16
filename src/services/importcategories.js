import { useState, useEffect } from "react";
import GetData from "./getdata";

//file gets all categories from DB and returns to state in cóntext file
export default function Categories() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    GetData.getAllCategories()
      .then(function (res) {
        // handle success
        setValue(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return [value, setValue];
}
