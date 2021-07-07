export const updateTerm = async (updateTerm) => {
  const term = updateTerm.term;
  const definition = updateTerm.definition;
  const examples = updateTerm.examples;
  const sources = updateTerm.sources;
  const oldTerm = updateTerm.oldTerm;

  let update = {
    term: term || oldTerm,
    definition,
    examples,
    sources,
  };

  Object.keys(update).forEach((key) =>
    update[key] === undefined ? delete update[key] : {}
  );

  console.log({ ...update });

  let response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/${oldTerm}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...update }),
    }
  );
  const data = await response.json();
  console.log(data);

  return data;
};
