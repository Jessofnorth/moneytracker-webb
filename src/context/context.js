import React, { useContext, useState, useEffect } from "react";
import ImportCat from "../services/importcategories";
import ImportEnt from "../services/importentries";
//context file that saves data such as entries and categories in context and state
//create context hook
const MoneyTrackerContext = React.createContext();

//return the context hook
export function MoneyTrackerBudgets() {
  return useContext(MoneyTrackerContext);
}

//export context to rest of app by passing the provider thru and giving all its childern (rest of app) access to it
export const MoneyTrackerProvider = ({ children }) => {
  //set states for data
  const [Categories, setCategories] = ImportCat();
  const [Entries, setEntries] = ImportEnt();

  function entriesByCategory(id) {
    return Entries.filter((Entries) => Entries.category === id);
  }

  // behövs dem ens? bara anropa GetDAta metoderna och sen Categories() och Entries() från import? för att uppdatera state?
  function addEntry() {}
  function addCategory() {  }
  function deleteEntry() {}
  function deleteCategory() {}
  return (
    <MoneyTrackerContext.Provider
      value={{
        Categories,
        Entries,
        entriesByCategory,
        addEntry,
        addCategory,
        deleteEntry,
        deleteCategory,
      }}
    >
      {children}
    </MoneyTrackerContext.Provider>
  );
};
