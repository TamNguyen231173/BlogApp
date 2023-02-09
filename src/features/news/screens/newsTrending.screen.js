import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";
import IonsIcon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { NewsContext } from "../../../services/news/news.context";
import { ListNewsTrending } from "../components/listNewsTrending.component";

const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Body = styled.View`
	flex: 1;
`;

export const NewsTrending = () => {
	const { isLoading, error, news } = useContext(NewsContext);
	return (
		<SafeArea>
			<Header>
				<IonsIcon name="arrow-back-outline" size={30} />
				<Text variant="label">Trending</Text>
				<IonsIcon name="ellipsis-vertical-outline" size={30} />
			</Header>
			<ScrollView>
				<Body>
					<ListNewsTrending news={news} />
				</Body>
			</ScrollView>
		</SafeArea>
	);
};
