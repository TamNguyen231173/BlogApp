export const NewsRequest = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?q=all&apiKey=68ea821742c44c75a5bc1f0449aaae8f`
  );
  const json = await res.json();
  return json.articles;
};
