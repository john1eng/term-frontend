import React from "react";
import { createTerm } from "../api/createTerm";
import { deleteTerm } from "../api/deleteTerm";
import { updateTerm } from "../api/updateTerm";

function Card({
  word,
  inputValue,
  collapsible,
  setInputValue,
  setWord,
  deleteT,
}) {
  const [term, setTerm] = React.useState(word);

  const termDivRef = React.useRef();
  const sourceDivRef = React.useRef();
  const definitionDivRef = React.useRef();
  const examplesDivRef = React.useRef();

  const termRef = React.useRef();
  const definitionRef = React.useRef();
  const examplesRef = React.useRef();
  const sourcesRef = React.useRef();

  React.useEffect(() => {
    setTerm(word);
  }, [word, inputValue]);

  const inputHandler = (e) => {
    switch (e.target.id) {
      case "term":
        setTerm({ ...term, term: e.target.value });
        break;
      case "definition":
        setTerm({ ...term, definition: e.target.value });
        break;
      case "examples":
        setTerm({ ...term, examples: e.target.value });
        break;
      case "sources":
        setTerm({ ...term, sources: e.target.value });
        break;
      default:
    }
    return null;
  };

  let displayNone = collapsible && "none";

  //create term
  const submitHandler = (e) => {
    e.preventDefault();
    createTerm(term);
    setTerm("");
    word && setWord("");
  };

  const deleteHandler = (e) => {
    console.log("delete handler");
    e.preventDefault();
    inputValue && setInputValue("");
    setWord && setWord("");
    deleteT && deleteT(word.term);
    deleteTerm(word.term);
    collapse();
  };

  const updateHandler = (e) => {
    e.preventDefault();
    updateTerm({ ...term, oldTerm: word.term });
  };

  const collapse = () => {
    if (collapsible) {
      sourceDivRef.current.classList.toggle(displayNone);
      definitionDivRef.current.classList.toggle(displayNone);
      examplesDivRef.current.classList.toggle(displayNone);
    }
  };

  return (
    <React.Fragment>
      <form className="mb-2 px-4">
        <div
          className="card-container min-w-460 border border-primary rounded-md text-primary
         bg-white grid grid-cols-2 grid-rows-3"
        >
          <div
            ref={termDivRef}
            className="col-start-1 col-end-3 row-start-1 row-end-2 pl-2 pr-2 h-14 focus-within:bg-primary_light"
            onClick={collapse}
          >
            <label htmlFor="term" className="text-xs h-full">
              term
              <textarea
                id="term"
                type="text"
                name="term"
                className="text-secondary block text-base w-full h-5/6 outline-none bg-transparent resize-none"
                onChange={inputHandler}
                ref={termRef}
                value={!term ? "" : term.term}
              ></textarea>
            </label>
          </div>
          <div
            ref={definitionDivRef}
            className={[
              "col-start-1 col-end-2 row-start-2 row-end-3 border-b border-r border-t border-current border-dashed pl-2 pr-2 h-28 focus-within:bg-primary_light pb-4",
              displayNone,
            ].join(" ")}
          >
            <label htmlFor="definition" className="text-xs h-full">
              definition
              <textarea
                id="definition"
                type="text"
                name="definition"
                className="text-secondary block text-base w-full h-5/6 outline-none bg-transparent resize-none"
                onChange={inputHandler}
                ref={definitionRef}
                value={!term ? "" : term.definition}
              ></textarea>
            </label>
          </div>
          <div
            ref={examplesDivRef}
            className={[
              `col-start-2 col-end-3 row-start-2 row-end-3 border-b border-t border-current border-dashed pl-2 pr-2 h-28 focus-within:bg-primary_light pb-4`,
              displayNone,
            ].join(" ")}
          >
            <label htmlFor="examples" className="text-xs h-full">
              examples
              <textarea
                id="examples"
                type="text"
                name="examples"
                className="text-secondary block text-base w-full h-5/6 outline-none bg-transparent resize-none"
                onChange={inputHandler}
                ref={examplesRef}
                value={!term ? "" : term.examples}
              ></textarea>
            </label>
          </div>
          <div
            ref={sourceDivRef}
            className={[
              "col-start-1 col-end-3 row-start-3 row-end-4 pl-2 h-28 focus-within:bg-primary_light",
              displayNone,
            ].join(" ")}
          >
            <div>
              <label htmlFor="sources" className="text-xs h-full">
                sources
                <textarea
                  id="sources"
                  type="text"
                  name="sources"
                  className="text-secondary block text-base w-full h-5/6 outline-none bg-transparent resize-none"
                  onChange={inputHandler}
                  ref={sourcesRef}
                  value={!term ? "" : term.sources}
                ></textarea>
              </label>
              <div className="flex justify-end pr-2">
                {!word && term && (
                  <button onClick={submitHandler} title="add">
                    <ion-icon name="add-circle-outline" size="large"></ion-icon>
                  </button>
                )}
                {word && (
                  <button onClick={deleteHandler} title="delete">
                    <ion-icon
                      name="close-circle-outline"
                      size="large"
                    ></ion-icon>
                  </button>
                )}
                {word && (
                  <button onClick={updateHandler} title="update">
                    <ion-icon name="refresh-outline" size="large"></ion-icon>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Card;
