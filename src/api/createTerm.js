export const createTerm = async ({ term, definition, examples, sources }) => {
  console.log(process.env);
  let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      term: term.toLowerCase(),
      definition,
      examples,
      sources,
    }),
  });
  const data = await response.json();
  console.log(data);

  return data;
};
