export const fetchAllTerms = async () => {
  console.log("hello");
  const response = await fetch(process.env.REACT_APP_BACKEND_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data.def);
  return data.def;
};
