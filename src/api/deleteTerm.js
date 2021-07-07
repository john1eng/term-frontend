export const deleteTerm = async (word) => {
  console.log("deleteTerm", word);
  let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${word}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);

  return data;
};
