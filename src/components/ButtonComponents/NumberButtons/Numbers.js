import React, { useState } from "react";
import { numbers } from '../../../data'
//import any components needed
import NumberButton from './NumberButton';
//Import your array data to from the provided data file

const Numbers = (props) => {
  const [numberState, setNumberState] = useState(numbers)
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {/* state in hooks is passed in as state before for .map to iterate over */}
       {numberState.map(number => {
         return (
         <NumberButton number={number}/>
         )
       })}
    </div>
  );
};


export default Numbers;