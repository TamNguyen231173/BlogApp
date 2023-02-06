export const NewsRequest = async (category = "all") => {
	const res = await fetch(
		`https://newsapi.org/v2/everything?q=${category}&apiKey=68ea821742c44c75a5bc1f0449aaae8f`
	);
	const json = await res.json();
	return json.articles;
};
