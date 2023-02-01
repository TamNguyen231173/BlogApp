import { Pressable } from "react-native";
import styled from "styled-components/native";

export const ButtonDisabled = styled(Pressable)`
	width: 100%;
	height: 48px;
	align-items: center;
	justify-content: center;
	padding: ${(props) => props.theme.space[1]};
	background-color: ${(props) => props.theme.colors.ui.disabled};
	border-radius: ${(props) => props.theme.radius[0]};
`;
