export const fetchAllTerms = async () => {
    console.log("hello");
    const response = await fetch("http://localhost:4000/term", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data.def);
    return data.def
    
  };