import React from "react";
import { deleteTerm } from "../api/deleteTerm";
import { updateTerm } from "../api/updateTerm";

const deleteHandler = (word) => {
  deleteTerm(word);
};
const Term = ({ term }) => {
  const [termState, setTermState] = React.useState(term);

  console.log(termState);

  const inputHandler = (e) => {
    console.log(e);
    switch (e.target.id) {
      case "term":
        setTermState({ ...termState, term: e.target.value });
        break;
      case "definition":
        setTermState({ ...termState, definition: e.target.value });
        break;
      case "examples":
        setTermState({ ...termState, examples: [e.target.value] });
        break;
      case "sources":
        setTermState({ ...termState, sources: [e.target.value] });
        break;
      default:
    }
    return;
  };

  const updateHandler = (e) => {
    e.preventDefault();
    updateTerm({...termState, oldTerm: term.term});
  };

  let count = 0;

  return (
    <div>
      <form onSubmit={updateHandler}>
        <label htmlFor="term">
          Term
          <input
            id="term"
            type="text"
            name="term"
            defaultValue={termState.term}
            onBlur={inputHandler}
          />
        </label>
        <label htmlFor="definition">
          Definition
          <input
            id="definition"
            type="text"
            name="definition"
            defaultValue={termState.definition}
            onBlur={inputHandler}
          ></input>
        </label>
        <label htmlFor="examples">
          examples
          <input
            id="examples"
            type="text"
            name="examples"
            defaultValue={termState.examples[0]}
            onBlur={inputHandler}
          ></input>
        </label>
        <label htmlFor="sources">
          sources
          <input
            id="term"
            type="text"
            name="sources"
            defaultValue={termState.sources[0]}
            onBlur={inputHandler}
          ></input>
        </label>
        <button>Update</button>
      </form>
      <button onClick={() => deleteHandler(term.term)}>Delete</button>
    </div>
  );
};

export default Term;
