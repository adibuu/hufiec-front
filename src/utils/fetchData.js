const fetchData = async (uri) => {
  const response = await fetch(uri);

  if (!response.ok) {
    throw new Error("Could not fetch data!");
  }

  const data = await response.json();

  return data;
};

export default fetchData;
