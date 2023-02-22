import { SvgXml } from "react-native-svg";
import stlyed from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const Container = stlyed.View`
	flex: 1;
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Body = stlyed.View`
width: 100%;
align-items: center;
	padding: ${(props) => props.theme.space[4]};
`;

export const Title = stlyed(Text)`
	font-size: ${(props) => props.theme.fontSizes.body};
	font-family: ${(props) => props.theme.fonts.caption};
	color: ${(props) => props.theme.colors.text.black};
`;

export const AddImageContainer = stlyed.Pressable`
	position: relative;
`;

export const ImageView = stlyed.Image`
	width: 140px;
	height: 140px;
	border-radius: 70px;
`;

export const CameraIcon = stlyed(SvgXml)`
	position: absolute;
	bottom: 0;
	right: 12px;
`;

export const FormContainer = stlyed.View`
	width: 100%;
`;

export const InputContainer = stlyed.View`
	width: 100%;
	align-items: flex-start;
`;

export const LabelText = stlyed(Text)``;

export const Footer = stlyed.View`
	flex: 1;
	justify-content: flex-end;
	width: 100%;
	margin-top: ${(props) => props.theme.space[2]};
`;

export const ButtonContainer = stlyed.View`
	background-color: #0000000D;
	padding: ${(props) => props.theme.space[5]} ${(props) => props.theme.space[4]};
`;
