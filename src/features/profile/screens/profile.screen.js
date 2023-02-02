import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import stlyed from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SvgXml } from "react-native-svg";
import camera from "../../../../assets/camera";
import { TextInputView } from "../../../components/utility/text-input.component";
import { Text } from "../../../components/typography/text.component";

const Container = stlyed.View`
	flex: 1;
	padding: 0 ${(props) => props.theme.space[4]};
	background-color: ${(props) => props.theme.colors.bg.primary};
	align-items: center;
`;

const Title = stlyed.Text`
	font-size: ${(props) => props.theme.fontSizes.body};
	font-family: ${(props) => props.theme.fonts.caption};
	color: ${(props) => props.theme.colors.text.black};
`;

const AddImageContainer = stlyed.View`
	position: relative;
`;

const ImageView = stlyed.Image`
	width: 140px;
	height: 140px;
	border-radius: 70px;
`;

const CameraIcon = stlyed(SvgXml)`
	position: absolute;
	bottom: 0;
	right: 12px;
`;

const FormContainer = stlyed.View`
	width: 100%;
`;

const InputContainer = stlyed.View`
	width: 100%;
	align-items: flex-start;
`;

const LabelText = stlyed(Text)``;

export const ProfileScreen = () => {
	return (
		<SafeArea>
			<Container>
				<Title>Fill your Profile</Title>
				<Spacer position="top" size="large">
					<AddImageContainer>
						<ImageView
							source={{
								uri: "https://i0.wp.com/lalovelee.com/wp-content/uploads/2019/04/sample-avatar-003.jpg?fit=300%2C300&ssl=1",
							}}
						/>
						<CameraIcon width={30} height={30} xml={camera} />
					</AddImageContainer>
				</Spacer>
				<Spacer position="top" size="large" />
				<FormContainer>
					<InputContainer>
						<LabelText variant="caption">Username</LabelText>
						<TextInputView />
					</InputContainer>
				</FormContainer>
			</Container>
		</SafeArea>
	);
};
