import React from 'react';

const Term = () => {

    const [term, setTerm] = React.useState({def:"+"});

    const fetchData = async() => {
        console.log("hello")
        const response = await fetch('http://localhost:4000/term/test2', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json()
        console.log(data.def.term)
        setTerm(data)
        // setTerm(response);
        
    }

    React.useEffect(()=>{
        fetchData();
    },[])

    const termDis = (<div>
                        <div>term: {term.def.term}</div>
                        <div>definition: {term.def.definition}</div>
                        {/* <div>examples: {term.def.examples[0]}</div> */}
                        <div>sources: {term.def.sources[0]}</div>
                        
                    </div>)

    return (
        <React.Fragment>
            {termDis}
        </React.Fragment>
    )
}

export default Term;