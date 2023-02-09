import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import styled from "styled-components/native";
import { NewsCategory } from "./newsCategory.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const List = styled(FlatList)``;

export const ListNewsCategory = ({ tab }) => {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const NewsRequest = async (tab) => {
		const res = await fetch(
			`https://newsapi.org/v2/everything?q=${tab}&apiKey=370dae2cccc5458eb0efb2b2b1db3a24`
		);
		const json = await res.json();
		return json.articles;
	};

	const getNews = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const news = await NewsRequest(tab);
			setNews(news);
			setIsLoading(false);
		} catch (err) {
			setError(err);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getNews();
	}, []);

	return (
		<View style={{ backgroundColor: "#fff" }}>
			<List
				data={news}
				renderItem={({ item }) => {
					return (
						<Spacer position="bottom" size="large">
							<NewsCategory
								key={item.title}
								news={item}
							/>
						</Spacer>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};
