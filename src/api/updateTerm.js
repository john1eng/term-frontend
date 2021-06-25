export const updateTerm = async ({term, definition, examples, sources, oldTerm}) => {
    let response = await fetch(
      `http://localhost:4000/term/${oldTerm}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            term,
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
  