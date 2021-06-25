export const deleteTerm = async (word) => {
    console.log("deleteTerm", word)
    let response = await fetch(
      `http://localhost:4000/term/${word}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  
    return data;
  };
  