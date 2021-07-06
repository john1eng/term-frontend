import React from "react";
import { fetchTermByWord } from "../api/fetchTermByWord";
import Card from "./Card";

function SearchTerm() {
  const [term, setTerm] = React.useState();
  const [inputValue, setInputValue] = React.useState();

  const inputRef = React.useRef();

  React.useEffect(() => {
    const timeOutId = setTimeout(async() => {
      if(inputValue){
        let response = await fetchTermByWord(inputValue);
        // console.log(response)
        await setTerm(response);
        }
        else{
          await setTerm(undefined)
        }
    }, 500);
    return () => clearTimeout(timeOutId);
  },[inputValue]);

  let termDisplay = <Card word={term} inputValue={inputValue} setInputValue={setInputValue} collapsible={false} setWord={setTerm}/>;
  console.log(inputRef.current?.value)
  return (
    <div className="mt-4 flex flex-col">
      <form className="mb-4 flex justify-center">
        <div className="">
          <label
            htmlFor="word"
            className="font-bold text-primary border border-primary rounded-md px-2 focus-within:bg-primary_light inline"
          >
            Search:
            <input
              className="ml-4 bg-transparent text-secondary outline-none w-20"
              value={inputValue}
              id="word"
              type="text"
              name="word"
              onChange={event => setInputValue(event.target.value)}
            ></input>
          </label>
          <div className="inline-block ml-2 w-20">{!term && "no term"}</div>
        </div>
      </form>
      {termDisplay}
    </div>
  );
}

export default SearchTerm;
