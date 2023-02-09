import styled from "styled-components/native";
import { ButtonPrimary } from "../../../components/utility/button.component";

export const Container = styled.View`
	flex: 1;
	padding: 20px;
	background-color: #fff;
`;

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Column = styled.View`
	flex-direction: column;
	justify-content: space-between;
`;

export const ImageView = styled.Image`
	width: 50px;
	height: 50px;
	border-radius: 25px;
`;

export const ChannelContainer = styled.View`
	flex-direction: row;
`;

export const LikeCommentContainer = styled.View`
	flex-direction: row;
`;

export const ButtonContainer = styled.View``;

export const ButtonView = styled(ButtonPrimary)`
	padding: ${(props) => props.theme.space[1]}
		${(props) => props.theme.space[2]};
`;

export const ImageBackground = styled.Image`
	width: 100%;
	height: 200px;
	border-radius: 6px;
`;

export const Footer = styled.View`
	flex: 1;
	justify-content: flex-end;
	width: 100%;
	margin-top: ${(props) => props.theme.space[4]};
	padding: 20px 0px;
`;
