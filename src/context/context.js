import React, { useContext, useState } from "react";


//context file that saves data such as entries and categories in context and state
const MoneyTrackerContext = React.createContext();

export function Categories() {

}

export const MoneyTrackerProvider = ({children}) =>{
    return children;
}