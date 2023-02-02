import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import logo from "../../../../assets/logo";
import { Spacer } from "../../../components/spacer/spacer.component";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text } from "../../../components/typography/text.component";
import { NewsTrending } from "../components/newsTrending.component";
import { NewsCategory } from "../components/newsCategory.component";
import { ScrollView } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";

const Container = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[4]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const NotificationContainer = styled.View``;

const SearchbarView = styled(Searchbar)`
	border-radius: ${(props) => props.theme.radius[0]};
	background-color: ${(props) => props.theme.colors.bg.primary};
	border: 0.5px solid ${(props) => props.theme.colors.ui.secondary};
`;

const Row = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const HomeScreen = () => {
	return (
		<SafeArea>
			<Container>
				<Row>
					<SvgXml width={101} height={32} xml={logo} />
					<NotificationContainer>
						<Ionicons name="notifications-outline" size={18} />
					</NotificationContainer>
				</Row>
				<Spacer position="top" size="large">
					<SearchbarView
						placeholder="Search"
						placeholderTextColor="#A0A3BD"
					/>
				</Spacer>
				<Spacer position="top" size="large">
					<Row>
						<Text variant="label">Trending</Text>
						<Text variant="caption">See all</Text>
					</Row>
				</Spacer>
				<Spacer position="top" size="medium">
					<NewsTrending />
				</Spacer>
				<Spacer position="top" size="large">
					<Row>
						<Text variant="label">Latest</Text>
						<Text variant="caption">See all</Text>
					</Row>
				</Spacer>
				<ScrollView>
					<NewsCategory />
				</ScrollView>
			</Container>
		</SafeArea>
	);
};
