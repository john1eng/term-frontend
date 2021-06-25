import React from 'react'
import Term from './Term';
import { fetchTermByWord } from '../api/fetchTermByWord';

function SearchTerm() {

    const [term, setTerm] = React.useState();

    const inputRef = React.useRef();

    const prevRef = (value) => {
        return value;
    }
    let preValue = ""
    const fetchTermByWordHandler = async () => {
        console.log(preValue)
        console.log(inputRef.current.value)
        preValue = prevRef(inputRef.current.value)
        let response = await fetchTermByWord(inputRef);
        // console.log(response)
        await setTerm(response)
    }

    let termDisplay;

    if(!term)
        termDisplay = "no term";
        else
        termDisplay= <Term term={term}/>
    

    return (
        <div>
            <form>
                <label htmlFor="word">
                    <input ref={inputRef} id="word" type="text" name="word" onChange={fetchTermByWordHandler}></input>
                </label>
            </form>
            {termDisplay}
        </div>
    )
}

export default SearchTerm;
