export const fetchTermByWord = async (inputRef) => {
  let response = await fetch(
    `http://localhost:4000/term/${inputRef.current.value}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data.def);

  return data.def;
};
