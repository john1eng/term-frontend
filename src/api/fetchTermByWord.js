export const fetchTermByWord = async (inputValue) => {
  let response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/${inputValue.toLowerCase()}`,
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
