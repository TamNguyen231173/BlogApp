import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const NewsCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const NewsCardCover = styled(Card.Cover)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Row = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const BodyContainer = styled.View``;

export const ChannelContainer = styled.View`
	flex-direction: row;
`;

export const ImageView = styled.Image`
	width: 20px;
	height: 20px;
	border-radius: 10px;
`;

export const TimeContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;
