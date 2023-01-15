import React, {useState, useEffect} from 'react';
import GetData from "../services/getdata";
import Link from "react-router-dom";
  
function EntriesList(){
    GetData.getAllCategories()
      .then(response => {
        console.log(response.data)});
}
  
export default EntriesList;