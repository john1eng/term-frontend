import React from "react";
import { fetchTermsByText } from "../api/fetchTermsByText";
import { fetchAllTerms } from "../api/fetchAllTerms";
import Card from "./Card";
import "../utilities/spinner.css";

function SearchTerms() {
  const [terms, setTerms] = React.useState();
  const [comment, setComment] = React.useState(true);
  const [inputValue, setInputValue] = React.useState();

  React.useEffect(() => {
    const timeOutId = setTimeout(async () => {
      if (inputValue) {
        let response = await fetchTermsByText(inputValue);
        //response will retrun an array of object, if not object, it will return an empty array
        if (response.length === 0) setComment(false);
        await setTerms(response);
      }
      if (!inputValue) {
        const response = await fetchAllTerms();
        setComment(true);
        await setTerms(response);
      }
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [inputValue]);

  const deleteTerms = (word) => {
    const updateTerm = terms.filter((term) => term.term !== word);
    console.log({ updateTerm });
    setTerms(updateTerm);
  };

  let termsDis;

  if (!terms) termsDis = <div className="loader">Loading...</div>;
  else
    termsDis = terms.map((term, index) => (
      <Card
        key={index}
        word={term}
        collapsible="true"
        deleteT={() => deleteTerms(term.term)}
      />
    ));

  let displayTermComment;
  if (terms) displayTermComment = "";
  if (!inputValue && terms) displayTermComment = "all terms";
  if (!comment && terms.length === 0) displayTermComment = "no such term";

  return (
    <div className="mt-4 flex flex-col">
      <form className="mb-4 flex justify-center">
        <div className="w-3/4">
          <label
            htmlFor="word"
            className="font-bold text-primary border border-primary rounded-md px-2 focus-within:bg-primary_light inline-block w-3/4"
          >
            Search:
            <input
              className="ml-4 bg-transparent text-secondary outline-none"
              value={inputValue}
              id="word"
              type="text"
              name="word"
              onChange={(event) => setInputValue(event.target.value)}
            ></input>
          </label>
          <div className="inline-block ml-2 w-25">{displayTermComment}</div>
        </div>
      </form>
      {termsDis}
    </div>
  );
}

export default SearchTerms;
