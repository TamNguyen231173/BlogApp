import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import logo from "../../../../assets/logo";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { NewsTrending } from "../components/newsTrending.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import notify from "../../../../assets/notify";
import { TabsView } from "../components/tabsView.component";

const Container = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[4]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const NotificationContainer = styled.View`
	shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 2,
	},
	shadowOpacity: 0.25,
	shadowRadius: 3.84,
`;

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

const tabs = [
	"all",
	"business",
	"entertainment",
	"general",
	"health",
	"science",
	"sports",
	"technology",
];

export const HomeScreen = () => {
	return (
		<SafeArea>
			<Container>
				<Row>
					<SvgXml width={101} height={32} xml={logo} />
					<NotificationContainer>
						<SvgXml width={50} height={50} xml={notify} />
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
					<Row>
						<TabsView tabs={tabs} />
					</Row>
				</Spacer>
			</Container>
		</SafeArea>
	);
};
