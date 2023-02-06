import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import stlyed from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SvgXml } from "react-native-svg";
import camera from "../../../../assets/camera";
import { TextInputView } from "../../../components/utility/text-input.component";
import { Text } from "../../../components/typography/text.component";
import { ButtonPrimary } from "../../../components/utility/button.component";
import { ScrollView } from "react-native";

const Container = stlyed.View`
	flex: 1;
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Body = stlyed.View`
width: 100%;
align-items: center;
	padding: ${(props) => props.theme.space[4]};
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

const Footer = stlyed.View`
	flex: 1;
	justify-content: flex-end;
	width: 100%;
	margin-top: ${(props) => props.theme.space[4]};
`;

const ButtonContainer = stlyed.View`
	background-color: #0000000D;
	padding: ${(props) => props.theme.space[5]} ${(props) => props.theme.space[4]};
`;

export const ProfileScreen = () => {
	return (
		<SafeArea>
			<ScrollView>
				<Container>
					<Body>
						<Title>Fill your Profile</Title>
						<Spacer position="top" size="large">
							<AddImageContainer>
								<ImageView
									source={{
										uri: "https://i0.wp.com/lalovelee.com/wp-content/uploads/2019/04/sample-avatar-003.jpg?fit=300%2C300&ssl=1",
									}}
								/>
								<CameraIcon
									width={30}
									height={30}
									xml={camera}
								/>
							</AddImageContainer>
						</Spacer>
						<FormContainer>
							<Spacer position="top" size="large">
								<InputContainer>
									<LabelText variant="caption">
										Username
									</LabelText>
									<TextInputView />
								</InputContainer>
							</Spacer>
							<Spacer position="top" size="large">
								<InputContainer>
									<LabelText variant="caption">
										Full Name
									</LabelText>
									<TextInputView />
								</InputContainer>
							</Spacer>
							<Spacer position="top" size="large">
								<InputContainer>
									<LabelText variant="caption">
										Email Address
									</LabelText>
									<TextInputView />
								</InputContainer>
							</Spacer>
							<Spacer position="top" size="large">
								<InputContainer>
									<LabelText variant="caption">
										Phone Number
									</LabelText>
									<TextInputView />
								</InputContainer>
							</Spacer>
						</FormContainer>
					</Body>
					<Footer>
						<ButtonContainer>
							<ButtonPrimary>
								<Text variant="buttonText">Next</Text>
							</ButtonPrimary>
						</ButtonContainer>
					</Footer>
				</Container>
			</ScrollView>
		</SafeArea>
	);
};
