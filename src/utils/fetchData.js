const fetchData = async (uri) => {
  const response = await fetch(uri);

  if (!response.ok) {
    throw new Error(
      "Nie można pobrać danych z serwera. Spróbuj ponownie później..."
    );
  }

  const data = await response.json();

  return data;
};

export default fetchData;
