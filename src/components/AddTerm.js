import React from "react";
import Card from "./Card";

function AddTerm() {
  let termDisplay = (
    <Card word="" inputValue setInputValue collapsible={false} setWord />
  );

  return (
    <div className="mt-4 flex flex-col text-primary">
      <div className="text-center font-bold mb-2">Add Term</div>
      {termDisplay}
    </div>
  );
}

export default AddTerm;
