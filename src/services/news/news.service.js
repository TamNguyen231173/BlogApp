export const NewsRequest = async () => {
	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?q=all&apiKey=370dae2cccc5458eb0efb2b2b1db3a24`
	);
	const json = await res.json();
	return json.articles;
};
