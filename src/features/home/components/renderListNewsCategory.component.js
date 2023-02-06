import { useContext } from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import styled from "styled-components/native";
import { NewsContext } from "../../../services/news/news.context";
import { NewsCategory } from "./newsCategory.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const List = styled(FlatList)``;

export const ListNewsCategory = ({ name }) => {
	const { isLoading, error, news } = useContext(NewsContext);
	return (
		<View style={{ backgroundColor: "#fff" }}>
			<List
				data={news}
				renderItem={({ item }) => {
					return (
						<Spacer position="bottom" size="large">
							<NewsCategory news={item} />
						</Spacer>
					);
				}}
				keyExtractor={(item) => item.title}
			/>
		</View>
	);
};
