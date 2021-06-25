import React from 'react'
import { createTerm } from '../api/createTerm';
import './SubmitTerm.css'

function SubmitTerm() {

    const [term, setTerm] = React.useState();

    const inputHandler = (e) => {
        switch(e.target.id){
            case 'term': setTerm({...term, term: e.target.value}); break;
            case 'definition': setTerm({...term, definition: e.target.value}); break;
            case 'examples': setTerm({...term, examples: [e.target.value]}); break;
            case 'sources': setTerm({...term, sources: [e.target.value]}); break;
            default: 
        }
        return null;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        createTerm(term)
    }


    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="term">
                Term
                <input id="term" type="text" name="term" onChange={inputHandler}></input>
            </label>
            <label htmlFor="definition">
                Definition:
                <input id="definition" type="text" name="definition" onChange={inputHandler}></input>
            </label>
            <label htmlFor="examples">
                Examples:
                <input id="examples" type="text" name="examples" onChange={inputHandler}></input>
            </label>
            <label htmlFor="sources">
                Sources:
                <input id="sources" type="text" name="sources" onChange={inputHandler}></input>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default SubmitTerm
