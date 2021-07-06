export const fetchTermsByText = async (inputValue) => {
  let response = await fetch(
    `http://localhost:4000/term/text/${inputValue.toLowerCase()}`,
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
