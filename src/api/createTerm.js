export const createTerm = async ({term, definition, examples, sources}) => {
    let response = await fetch(
      `http://localhost:4000/term`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            term: term.toLowerCase(),
            definition,
            examples,
            sources
        })
      }
    );
    const data = await response.json();
    console.log(data);
  
    return data;
  };
  